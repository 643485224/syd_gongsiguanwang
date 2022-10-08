/*
 * @Author: Ryan 
 * @Date: 2018-07-24 12:52:18 
 * @Last Modified by: Ryan
 * @Last Modified time: 2018-09-05 10:59:17
 */

$(document).ready(function() {

    var mySwiper2 = new Swiper('.honor-swiper', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        loopedSlides: 20,
        slidesPerGroup: 1,
        loop: true,
        // centeredSlides : true,
        observer: true,
        observeParents: true,

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    $(".dropdown").mouseover(function() {
        $(this).addClass("open");
    });

    $(".dropdown").mouseleave(function() {
        $(this).removeClass("open");
    })

})

function IndexCase() {
    var mySwiper = new Swiper('.case-swiper', {
        direction: 'horizontal',
        slidesPerView: 3,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween: 31,

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
}

function IndexBanner(time) {
    var mySwiper1 = new Swiper('.index_banner', {
        direction: 'horizontal',
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: time,
        },

    });
}

// ajaxurl
var HttpUrl = 'http://byw4703720001.my3w.com';
var baseUrl = '/SayedWebSel.asmx/SayedAllSel';

// 获取地址栏参数
function getUrlParms(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}