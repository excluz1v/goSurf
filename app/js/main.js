$(function () {

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<button type="button" aria-label="previous slide" class="slick-prev top40"><img src="../img/arrow-left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next top40" aria-label="next slide"><img src="../img/arrow-right.svg"></img></button>',
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
        prevArrow: '<button type="button" aria-label="previous slide" class="slick-prev shadow top40"><img src="../img/arrow-left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next shadow top40" aria-label="next slide"><img src="../img/arrow-right.svg"></img></button>'

    })
    $('.travel__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<button type="button" aria-label="previous slide" class="slick-prev shadow"><img src="../img/arrow-left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next shadow" aria-label="next slide"><img src="../img/arrow-right.svg"></img></button>'
    })
    $('.sleep__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<button type="button" aria-label="previous slide" class="slick-prev shadow"><img src="../img/arrow-left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next shadow" aria-label="next slide"><img src="../img/arrow-right.svg"></img></button>'
    })
    $('.shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<button type="button" aria-label="previous slide" class="slick-prev shadow top40"><img src="../img/arrow-left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next shadow top40" aria-label="next slide"><img src="../img/arrow-right.svg"></img></button>'
    })
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./img/Plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="./img/Minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {

            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });
    $('.quantity-button').on('click', function () {
        let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
        $('.summ').html('$' + summ)
    })
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ)

    $('.slider-card__state').on('click', function () {
        $(this).toggleClass('active')
    })


});