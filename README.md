# Territory Services

Welcome to the Territory Services repository. This repository is specifically tailored for service.nt.gov.au within the Northern Territory Government's domain, utilising the NT Government Design System as its framework.

## Introduction
This repository aims to streamline the development process for projects within service.nt.gov.au by offering a range of services, utilities, and components. It serves as a dedicated space for developing solutions that cater to the unique requirements of Territory Services, while leveraging the design principles and components provided by the NT Government Design System.

## Who is this for?
This project is primarily targeted towards developers, contractors, and stakeholders involved in building applications and services for service.nt.gov.au, while leveraging the NT Government Design System for consistent and cohesive design elements.

## Getting Started
To begin using Territory Services in your project, follow these steps:

### 1. Clone the repository

Clone the Git repository to your local machine.

### 2. Install dependencies

```bash
npm install
```

The Sass task uses `grunt-contrib-sass`, which requires Ruby and the Ruby Sass executable to be available on `PATH`. The full Grunt build also invokes Unix shell commands (`rm` and `mv`) while refreshing the NT Government Design System dependency.

### 3. Run locally

Build the project and start the local development server:

```bash
npm run dev
```

The site is served at [http://localhost:8080](http://localhost:8080). The default page includes a decision-tree radio-button example immediately below the hero.

To serve existing build output without rebuilding it, run:

```bash
npm run serve
```

Other useful commands:

| Command | Purpose |
| --- | --- |
| `npm run build` | Refresh the NT Government Design System dependency and build CSS and JavaScript. |
| `npm run sass` | Compile Territory Services Sass into the preflight CSS bundle. |
| `npx grunt cssmin:territoryServices` | Minify the preflight CSS into the distribution bundle. |

### Windows troubleshooting

`grunt run` and `npm run dev` perform a full design-system refresh before starting the server. On Windows, they can fail if Ruby Sass is not installed or if the shell cannot run the build's Unix commands (`rm` and `mv`). The `--force` option does not resolve these missing prerequisites and can leave incomplete build output.

To view the existing compiled site without running the build, use:

```bash
npm run serve
```

For a full build on Windows, run the commands from a Unix-compatible environment such as WSL, install Ruby Sass, and ensure Git is available on `PATH`. The design-system checkout must be present as `NTGov-DS` before running the Sass task. After the build completes, `npm run serve` can be used to view the result.

## Decision tree radio buttons

Radio choices inside `.decision-tree` are presented as a wrapping group of buttons. Unselected choices use the outlined button treatment, while the selected choice uses the primary button treatment.

Use native radio inputs immediately followed by their associated labels. Give every input a unique `id`, and use the same `name` for all choices in a group:

```html
<div class="decision-tree">
	<div class="sq_question_wrapper">
		<fieldset>
			<legend>How would you like to access this service?</legend>
			<ul>
				<li>
					<input
						type="radio"
						class="sq-form-field"
						name="service-access"
						id="service-access-online"
						value="online"
					>
					<label for="service-access-online">Online</label>
				</li>
				<li>
					<input
						type="radio"
						class="sq-form-field"
						name="service-access"
						id="service-access-phone"
						value="phone"
					>
					<label for="service-access-phone">By phone</label>
				</li>
			</ul>
		</fieldset>
	</div>
</div>
```

The native inputs remain keyboard accessible and submit their values normally. Do not hide them with `display: none`, remove the associated labels, or replace the radios with JavaScript-only buttons. The component styles provide checked, hover, active, focus-visible, invalid, and disabled states. Radio inputs outside `.decision-tree` retain the standard circular radio treatment.

### Submit Issues


Submit issues for bug reports, feature requests, or any other feedback.

### Fork and Pull Requests


Fork the repository, make changes, and submit pull requests to contribute to the improvement of this project.

## Versioning
---

For the sake of transparency in our release cycle and in adherence to the principles of backward compatibility, this repository is meticulously governed by the Semantic Versioning guidelines.

The versioning system is delineated as MAJOR.MINOR.PATCH, with the following delineations:

- **MAJOR version** designates substantial, incompatible global changes.
- **MINOR version** is reserved for significant backward-compatible updates and the introduction of new components.
- **PATCH version** is allocated to minor backward-compatible updates, the inclusion of new component variations, and bug fixes.

This systematic approach to versioning is intended to furnish a structured and predictable framework for the evolution of our design system, prioritising precision and coherence in its progression.  

## Changelog
---

Stay informed about major changes and updates by checking the changelog.  


## Support
---

If you encounter issues, contact [websupport@nt.gov.au](mailto:websupport@nt.gov.au).

## Acknowledgments
---

We extend our gratitude to the creators and contributors of the projects and libraries that have inspired or supported this repository, along with the NTGov Design System.

## NTGov Design System Roadmap
---

Stay tuned for upcoming enhancements and features by checking our roadmap.

Explore, build, and create amazing user experiences with the NTGov Design System
