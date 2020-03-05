var velocity = 0.5;

function update() {
    var pos = $(window).scrollTop();
    $('.fixed-back-body').each(function() {
        var $element = $(this);
        var height = $element.height();
        $(this).css('background-position', '20%' + Math.round((height - pos) * velocity) + 'px');
        });

    var el = document.querySelector('.nav-icon');
    var cont = document.querySelector('.greet');
    addClassNameIfInCont(el, cont, 'black');
}

function updateOnScroll() {
    $(window).bind('scroll', update);
}

updateOnScroll();
