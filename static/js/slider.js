var slideIdx = 1;
equalDistributionStyleLeft(slideIdx)

function nextImg(n) {
    disableButtonsForPeriod('button-slide', 300);
    equalDistributionStyleLeft(slideIdx += n);
}

function disableButtonsForPeriod(nameClass, ms) {
    elements = document.getElementsByClassName(nameClass);
    for (i=0; i<elements.length; i++) {
        elements[i].style.pointerEvents = 'none';
    }
    setTimeout(function() {
        for (i=0; i<elements.length; i++) {
            elements[i].style.pointerEvents = 'auto';
        }
    }, ms);
}

function equalDistributionStyleLeft(n){
    var galleryElements = document.getElementsByClassName('cont-img');
    var lenArr = galleryElements.length;
    var halfLen = parseInt(lenArr/2);
    var remIdx;

    if ( n > lenArr ) { slideIdx = 1; }
    if ( n < 1) { slideIdx = lenArr; }
    for (i=0; i<lenArr; i++) {
        galleryElements[i].classList.remove('next');
        galleryElements[i].classList.remove('prev');
        galleryElements[i].classList.remove('active');
    }
    galleryElements[slideIdx-1].classList.add('active');

    if (slideIdx-1 == 0) {
        galleryElements[lenArr-1].classList.add('prev');
        galleryElements[slideIdx].classList.add('next');
    } else if (slideIdx == lenArr) {
        galleryElements[slideIdx-2].classList.add('prev');
        galleryElements[0].classList.add('next');
    } else {
        galleryElements[slideIdx-2].classList.add('prev');
        galleryElements[slideIdx].classList.add('next');
    }


    var galleryEl = document.getElementsByClassName('gallery')[0];
    galleryEl.style.transform = 'translateX(0%)';

    var idxActive = slideIdx - 1;
    galleryElements[idxActive].style.left = 0;

    var nRight = 100;
    var nHalfRight = idxActive + halfLen + 1;
    for (i = idxActive + 1; i < nHalfRight; i++) {
        if (i == lenArr) {
            for (j = 0; j < nHalfRight - i; j++) {
                galleryElements[j].style.left = nRight.toString() + '%';
                galleryElements[j].style.visibility = 'visible';
                nRight += 100;
                remIdx = j;
            }
            break;
        } else {
            galleryElements[i].style.left = nRight.toString() + '%';
            galleryElements[i].style.visibility = 'visible';
            nRight += 100;
            remIdx = i;
        }
    }
    if (lenArr%2 == 0) { remIdx = (remIdx == 0) ? lenArr-1 : remIdx-1; }
    galleryElements[remIdx].style.visibility = 'hidden';

    var nLeft = -100;
    var nHalfLeft = idxActive - halfLen;
    for (i = idxActive - 1; i > nHalfLeft - 1; i--) {
        if (i < 0) {
            for (j = lenArr; j > lenArr + nHalfLeft; j--) {
                galleryElements[j-1].style.left = nLeft.toString() + '%';
                galleryElements[j-1].style.visibility = 'visible';
                nLeft -= 100;
                remIdx = j-1;
            }
            break;
        } else {
            galleryElements[i].style.left = nLeft.toString() + '%';
            galleryElements[i].style.visibility = 'visible';
            nLeft -= 100;
            remIdx = i;
        }
    }
    galleryElements[remIdx].style.visibility = 'hidden';
    changeInfoGallery();
}


function changeInfoGallery() {
    var elemCent, elemPrev, elemNext, elements;

    elements = document.querySelectorAll('.cont-info')[0].children;
    elemCent = document.querySelector('.cont-img.active ').className.split(' ')[1];
    elemPrev = document.querySelector('.cont-img.prev').className.split(' ')[1];
    elemNext = document.querySelector('.cont-img.next').className.split(' ')[1];

    document.querySelector('.cont-info').classList.add('active');
    setTimeout(function() {
        for (i=0; i < elements.length; i++) {
            if (elements[i].classList.contains('left')) {
                elements[i].children[2].textContent = elemPrev;
            } else if (elements[i].classList.contains('center')) {
                elements[i].children[0].textContent = elemCent;
            } else {
                elements[i].children[0].textContent = elemNext;
            }
            document.querySelector('.cont-info').classList.remove('active')
        }
    }, 200);
}