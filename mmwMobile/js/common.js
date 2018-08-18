/**
 * Created by xl on 2015/11/30 0030.
 */
var mySwiper = new Swiper ('.swiper-container', {
    pagination: '.swiper-container .swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});

$(document).ready(function() {
    $('.page-header .a-detail .b-content').click(function(){
        $('.page-header .a-detail .b-sub-menu').slideToggle(400);
    });
});