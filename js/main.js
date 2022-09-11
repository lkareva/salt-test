//header-menu
$(document).ready(function() {
    $('.menu__burger').on('click', function(t) {
        t.preventDefault();
        $('.menu__burger, .menu__menu ').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
});

//header-slider
$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2600,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'dots-hexagon',
        appendDots: '.header__slider-dots',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: false,
                }
            }]
    });
});

//header-scroll
$(document).ready(function () {
    $('.scroll').on('click', function() {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 600,   // по умолчанию «400» 
            easing: "linear" // по умолчанию «swing» 
        });

        return false;
    });
});

//product 
function btnMob(w) {
        if (w <= 768 && $('.product__btn').siblings('.product__item').length == 0) {
            let blockBtn = $('.product__btn').detach();
            blockBtn.appendTo('.product__box');
        }
        else if (w > 768 && $('.product__btn').siblings('.product__item').length != 0) {
            let blockBtn = $('.product__btn').detach();
            blockBtn.appendTo('.product__wrap');
        }
}
$(document).ready(function () {
    let windowWidth = $(window).outerWidth(true);
    btnMob(windowWidth);
    $(window).resize(function () {
        windowWidth = $(window).outerWidth(true);
        btnMob(windowWidth);
    });
});


//video 
$(document).ready(function () {
    $('.product__video').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});

//form 
$(document).ready(function () {
    $('#form').each(function() {
        $(this).on('submit', async function (e) {
            e.preventDefault();
            let error = formValidate(this);
            if (error === 0){
                $('#form')[0].reset();
            }
        });
    });
});


function formValidate(form) {
    let error = 0;
    $(form).find('.req').each(function () {
        formRemoveError(this);

        if ($(this).hasClass('tell')) {

            if(emailTest($(this).val())){
                formAddError(this);
                error++;
            }

        } else {

            if($(this).val() === ''){
                formAddError(this);
                error++;
            }

        }
    })
    return error;
}
function formAddError(input) {
    $(input).addClass('error');
    $(input).siblings('label').addClass('error');
}
function formRemoveError(input) {
    $(input).removeClass('error');
    $(input).siblings('label').removeClass('error');
}
function emailTest(val) {
    return !/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(val);
}
