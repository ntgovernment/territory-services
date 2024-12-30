$(document).ready(function() {
    setTimeout(function(){
        $("#searchToggleMobile").click(function() {
            $(".navbar-normal").hide();
            $(".navbar-search-mobile").fadeIn();
        });

        $(".navbar-search-mobile .btn-close").click(function() {
            $(".navbar-search-mobile").hide();
            $(".navbar-normal").fadeIn();
        });
    }, 5);
  });