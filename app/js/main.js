$(function () {

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<button type="button" aria-label="previous slide" class="slick-prev"><img src="../img/arrow-left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next" aria-label="next slide"><img src="../img/arrow-right.svg"></img></button>',
        asNavFor: '.slider__dots'
    })
    $('.slider__dots').slick({
        slidesToScroll: 1,
        asNavFor: '.header__slider',
        slidesToShow: 4

    })
    $('.surf__slider').slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        prevArrow: '<button type="button" aria-label="previous slide" class="slick-prev shadow"><img src="../img/arrow-left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next shadow" aria-label="next slide"><img src="../img/arrow-right.svg"></img></button>'

    })
    $('.travel__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<button type="button" aria-label="previous slide" class="slick-prev shadow"><img src="../img/arrow-left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next shadow" aria-label="next slide"><img src="../img/arrow-right.svg"></img></button>'
    })

});