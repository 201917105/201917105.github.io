let arrowPrev = document.querySelector('.arrow-prev');
let arrowNext = document.querySelector('.arrow-next');
let listInfo = document.querySelector('.list-info>ul');
let smallImg = document.querySelector('.small-img');
let lists = document.querySelectorAll('.list-info li');
let listImg = document.querySelectorAll('.list-info img');
let smallBox = document.querySelector('.small-box');
let glass = document.querySelector('.glass');
let bigBox = document.querySelector('.big-box');
let bigImg = document.querySelector('.big-box>img');

arrowNext.onclick = function () {
    listInfo.style.left = '-232px';
}

arrowPrev.onclick = function () {
    listInfo.style.left = '0';
}

for (let i = 0; i < lists.length; i++) {
    lists[i].onmouseover = function () {
        for (let j = 0; j < lists.length; j++) {
            lists[j].className = '';
        }
        lists[i].className = 'img-hover';   
        smallImg.src = listImg[i].src;
        bigImg.src = listImg[i].src;
    }
}
smallBox.onmouseover = function () {
    glass.style.display = 'block';
    bigBox.style.display = 'block';
}

smallBox.onmouseout = function () {
    glass.style.display = 'none';
    bigBox.style.display = 'none';
}

smallBox.onmousemove = function (e) {
    e = e || window.event;
    let top = e.clientY - glass.offsetHeight / 2 - smallBox.offsetTop;
    let left = e.clientX - glass.offsetWidth / 2 - smallBox.offsetLeft;

    if (top <= 0) {
        top = 0;
    } else if (top >= smallBox.offsetHeight - glass.offsetHeight) {
        top = smallBox.offsetHeight - glass.offsetHeight;
    }
    if (left <= 0) {
        left = 0;
    } else if (left >= smallBox.offsetWidth - glass.offsetWidth) {
        left = smallBox.offsetWidth - glass.offsetWidth;
    }

    glass.style.top = top + 'px';
    glass.style.left = left + 'px';
    let percentY = top / (smallBox.offsetHeight - glass.offsetHeight);
    let percentX = left / (smallBox.offsetWidth - glass.offsetWidth);
    let top1 = percentY * (bigImg.offsetHeight - bigBox.offsetHeight);
    let left1 = percentX * (bigImg.offsetWidth - bigBox.offsetWidth);
    bigImg.style.left = -left1 + 'px';
    bigImg.style.top = -top1 + 'px';
}


let buyNum = document.querySelector('.buy-num');
let add = document.querySelector('.add');
let minus = document.querySelector('.minus');

add.onclick = function () {
    buyNum.value++;

    if (buyNum.value > 1) {
        minus.className = 'minus';
    }
}
minus.onclick = function () {
    buyNum.value--;
    if (buyNum.value <= 1) {
        buyNum.value = 1;
        minus.className = 'minus disablede';
    }
}

let asideCon = document.querySelector('.aside-con>ul');
let up = document.querySelector('.up');
let down = document.querySelector('.down');
down.onclick = function () {
    let top = parseInt(getStyle(asideCon).top);
    top -= 564;
    if (top < -564) {
        top = 0;
    }
    asideCon.style.top = top + 'px';

}

up.onclick = function () {
    let top = parseInt(getStyle(asideCon).top);
    top += 564;
    if (top > 0) {
        top = -564;
    }
    asideCon.style.top = top + 'px';
}

function getStyle(ele) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele);
    } else {
        return ele.currentStyle;
    }
}
(function () {
    let spanBtn = document.querySelectorAll('.category span');
    let dl = document.querySelectorAll('.category dl');
    for (let i = 0; i < spanBtn.length; i++) {
        spanBtn[i].onclick = function () {
            if (dl[i].className === 'open') {
                dl[i].className = '';
                spanBtn[i].style.backgroundPosition = '-20px 0';
            } else {
                dl[i].className = 'open';
                spanBtn[i].style.backgroundPosition = '-37px 0';
            }

        }
    }
})();

let tabMain = document.querySelectorAll('.tab-main li');
let tabItems = document.querySelectorAll('.tab-items');
for (let i = 0; i < tabMain.length; i++) {
    tabMain[i].onclick = function () {
        for (let j = 0; j < tabMain.length; j++) {
            tabMain[j].className = '';
            tabItems[j].className = 'tab-items';
        }
        tabItems[i].className = 'con-active';
        tabMain[i].className = 'tab-active';
    }
}
let backTop = document.querySelector('.back-top');
backTop.onclick = function () {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
}


