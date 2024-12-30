$(document).ready(function() {
    initSideNav(); 
});

// Adds accordion functionality to nested items in the side navigation
function initSideNav() {
    var sideNavParents = document.querySelectorAll('.ntg-side-nav__collapser');
    if(!sideNavParents) {
        return false;
    }

    for (var i = 0; i < sideNavParents.length; i++) {
        sideNavParents[i].addEventListener('click', function (e) {
            e.preventDefault();

            var thisNext = this.parentElement.getElementsByClassName('collapse')[0];

            if (thisNext.classList.contains('show')) {
                thisNext.classList.remove('show');
                this.classList.add('collapsed');
            } else {
                thisNext.classList.add('show');
                this.classList.remove('collapsed');
            }
        });
    }
}
