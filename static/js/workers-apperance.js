
$(function() {
    $('.name-workers .text').hover(function() {
        var elements = document.querySelectorAll('.name-workers .text');
        var workers = document.querySelectorAll('.relative.cont .worker');

        $(this).get(0).classList.add('active');
        for (i=0; i < elements.length; i++) {
            if (elements[i].classList.contains('active')) {
                workers[i].classList.add('active');
            } else {
                workers[i].classList.remove('active');
            }
        }
    },
    function() {
        var workers = document.querySelectorAll('.relative.cont .worker');

        $(this).get(0).classList.remove('active');
        for (i=0; i < workers.length; i++) {
            workers[i].classList.remove('active');
        }
    });
});