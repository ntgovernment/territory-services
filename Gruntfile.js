// Required Grunt extensions/modules:
// npm i grunt-cli --save-dev
// npm i grunt-contrib-sass --save-dev
// npm i grunt-contrib-cssmin --save-dev
// npm i grunt-contrib-uglify --save-dev
// npm i grunt-contrib-concat --save-dev
// npm i grunt-contrib-watch --save-dev
// npm i grunt-shell --save-dev

module.exports = function (grunt) {
  grunt.initConfig({
    // Shell commands configuration
    shell: {
      // Command to remove old design system files from TS space
      removeOldDesignSystemFiles: {
        command: 'rm -rf NTGov-DS', // Delete old NTGov-DS files
        options: {
          failOnError: false
        }
      },
      // Command to fetch new design system files from NTGov-DS repo
      fetchNewDesignSystemFiles: {
        command: 'git clone --depth 1 --branch main https://github.com/ntgovernment/ntg-web-design-system NTGov-DS',
        options: {
          failOnError: false
        }
      },
      // Command to remove global DS files from TS space
      removeGlobalDSFiles: {
        command: 'rm -rf dist/globals',
        options: {
          failOnError: false
        }
      },
      // Command to fetch new global DS files from NTGov-DS repo
      fetchGlobalDSFiles: {
        command: 'mv NTGov-DS/dist/globals dist/globals',
        options: {
          failOnError: false
        }
      },

    },
    // SASS configuration. 
    // Note: These are blended NTGov-DS with TS files. Refer to territory-services.scss as to which files from NTGov-DS are used or excluded.
    sass: {
      territoryServices: {
        files: {
          "preflight/territory-services/css/territory-services.css": "src/sass/territory-services.scss",
        },
      },
    },
    // CSS minification configuration
    cssmin: {
      territoryServices: {
        files: [
          {
            expand: true,
            cwd: "preflight/territory-services/css",
            src: ["territory-services.css"],
            dest: "dist/territory-services",
            ext: ".min.css",
          },
        ],
      },
    },
    // Uglify (JS minification) configuration
    uglify: {
      territoryServices: {
        files: [
          {
            expand: true,
            cwd: "src/js/territory-services/components",
            src: ["**/*.js"],
            dest: "preflight/territory-services/js/components",
            ext: ".min.js",
          },
          {
            expand: true,
            cwd: "src/js/territory-services/global",
            src: ["*.js"],
            dest: "preflight/territory-services/js",
            ext: ".min.js",
          },
          {
            expand: true,
            cwd: "src/js/plugins",
            src: ["**/*.js"],
            dest: "preflight/territory-services/js/plugins",
            ext: ".min.js",
          },
        ],
      },
    },
    // Concatenation configuration
    concat: {
      territoryServicesComponents: {
        src: ["preflight/territory-services/js/components/**/*.js"],
        dest: "dist/territory-services/territory-services-components.min.js",
      },
      territoryServicesPlugins: {
        src: ["preflight/territory-services/js/plugins/**/*.js"],
        dest: "dist/territory-services/territory-services-plugins.js",
      },
      territoryServices: {
        src: [
          "preflight/territory-services/js/main.min.js",
        ],
        dest: "dist/territory-services/territory-services-main.min.js",
      },
    },
    // For handling boilerplates
    connect: {
      server: {
        options: {
          port: 8080,
          base: {
            path: "./",
            options: {
              index: "index.html",
            },
          },
          open: true,
        },
      },
    },
    // Watch configuration (disabled by default - enable when required)
    watch: {
      territoryServicesSass: {
        files: ["src/sass/territory-services/*.scss"],
        tasks: ["sass:territoryServices", "cssmin:territoryServices", "uglify:territoryServices", "concat:territoryServices"],
      },
    },
  });

  // Load Grunt tasks
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-shell");

  // Register custom tasks
  grunt.registerTask("territory-services", [
    "sass:territoryServices",
    "cssmin:territoryServices",
    "uglify:territoryServices",
    "concat:territoryServices",
    "concat:territoryServicesComponents",
    "concat:territoryServicesPlugins",
  ]);

  grunt.registerTask("pullDesignSystem", [
    "shell:removeOldDesignSystemFiles", // Delete old cloned repository
    "shell:removeGlobalDSFiles", // Delete globals folder and files     
    "shell:fetchNewDesignSystemFiles",   // Clone the new repository   
    "shell:fetchGlobalDSFiles" // Move globals folder and files
  ]);

  grunt.registerTask("removeDesignSystem", [
    "shell:removeOldDesignSystemFiles", // Delete old cloned repository
  ]);

  grunt.registerTask("run", [
    "pullDesignSystem",
    "territory-services",
    "removeDesignSystem",
    "connect",
    "watch",
  ]);
};
