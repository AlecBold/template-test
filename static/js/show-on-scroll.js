var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');
var sliderElements = document.querySelectorAll('.slider-on-scroll');


function isElementInViewport(el) {
    if (typeof jQuery === 'function' && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}


function getObjClass(childImg, className) {
    var num = childImg.className.split(' ')[1];
    var childInfo = document.querySelectorAll('.'+className+'.'+num)[0];
    return childInfo;
}


function galleryPictureInCont(lookIn, elements, settings) {
    var bodyRect = $(lookIn).get(0).getBoundingClientRect();
    var bodyRectRight = bodyRect.right;
    var bodyRectLeft = bodyRect.left;
    var bodyRectTop = bodyRect.top;
    var bodyRectBottom = bodyRect.bottom;



    $(elements).each(function(i, elem) {

        if ((bodyRectRight  > $(this).get(0).getBoundingClientRect().left) &&
            (bodyRectLeft   < $(this).get(0).getBoundingClientRect().right) &&
            (bodyRectTop    > $(this).get(0).getBoundingClientRect().bottom) &&
            (bodyRectBottom < $(this).get(0).getBoundingClientRect().top)) {

            elem.classList.add(settings);
            //getObjClass(elem, 'child-info').classList.add('is-visible');
            //getObjClass(elem, 'nav-gal-num').classList.add('active');
        } else {
            elem.classList.remove(settings);
            //getObjClass(elem, 'child-info').classList.remove('is-visible');
            //getObjClass(elem, 'nav-gal-num').classList.remove('active');
        }
    })

    /*return $(elements).filter(function() {
        return (bodyRectRight > $(this).get(0).getBoundingClientRect().left) &&
                (bodyRectLeft < $(this).get(0).getBoundingClientRect().right);
    });*/
}

function elementInContainer(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
}

function addClassNameIfInCont(el, cont, className) {
    var top = cont.getBoundingClientRect().top;
    if (top <= 0) {
        el.classList.add(className);
    } else {
        el.classList.remove(className);
    }
}

function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            //element.classList.remove('is-visible');
        }
    });

    var el1 = document.querySelector('.nav-icon');
    var el2 = document.querySelector('.left.bar .gym-name');
    var cont = document.querySelector('.about-section');
    addClassNameIfInCont(el1, cont, 'black');
    addClassNameIfInCont(el2, cont, 'black');

    scroll(loop);
}

loop();