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
        nextArrow: '<button type="button" class="slick-next shadow top40" aria-label="next slide"><img src="../img/arrow-right.svg"></img></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    centerMode: true

                }
            }
        ]

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
    $('.menuToggle').on('click', function () {
        $('.menu_burger').slideToggle(300, function () {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');

            }
        });

    });
    new WOW().init()

});


const someArray = [
    {
        id: 1,
        value: 15,
    },
    {
        id: 2,
        value: 3,
    },
    {
        id: 1,
        value: 4,
    },
];

// // Отсортируй массив по возрастанию и по убыванию value.
// someArray.sort(function (a, b) {
//     return a.value - b.value
// });
// console.log(someArray)

// someArray.sort()
// // Верни массив, добавив каждому элементу новое поле.
// someArray.map(el => {
//     el.new = 5
// });

// // Верни только те элементы, которые имеют value больше первого в массиве.
// someArray.filter(el => {
//     if (el.value > someArray[0].value) {
//         return el
//     } else false
// });

