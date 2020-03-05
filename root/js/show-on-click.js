function downBar() {
    var elements = document.querySelectorAll('.show-bar');
    elements.forEach(function(element) {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        } else {
            element.classList.add('active');
        }
    });

    var navIcon = document.getElementsByClassName('nav-icon')[0];
    if (navIcon.classList.contains('open')) {
        navIcon.classList.add('close');
        navIcon.classList.remove('open');
    } else {
        navIcon.classList.add('open');
        navIcon.classList.remove('close');
    }
}
