jQuery(document).ready(function () {
  $(".house__sl").slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  // up-btn

  var btn = $(".up-btn");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("up-btn_show");
    } else {
      btn.removeClass("up-btn_show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "1000");
  });
});

// burger-lines_active
$(".header-burger-menu").on("click", function (e) {
  e.preventDefault;
  $(this).toggleClass("header-burger-menu_active");
});
$(".header__burger-menu").click(function (e) {
  // Ищем кнопку, при нажатии на которою будет открываться наше меню
  e.preventDefault; // Для того что бы отменить дефолтный href, что бы не отбрасывало на вверх
  $(".header-nav__list").toggleClass("show"); // добавляем класс с дисплей блок
});
// Закрытие при клике на ссылку
$("ul.header-nav__list li a").click(function (e) {
  e.preventDefault;
  $(".header-nav__list").toggleClass("show"); // добавляем класс с дисплей блок
});
// плавный переход
$('a[href^="#shelter"]').on("click", function (event) {
  // отменяем стандартное действие
  event.preventDefault();

  var sc = $(this).attr("href"),
    dn = $(sc).offset().top;
  /*
   * sc - в переменную заносим информацию о том, к какому блоку надо перейти
   * dn - определяем положение блока на странице
   */

  $("html, body").animate({ scrollTop: dn }, 1000);

  /*
   * 1000 скорость перехода в миллисекундах
   */
});
$('a[href^="#donate"]').on("click", function (event) {
  // отменяем стандартное действие
  event.preventDefault();

  var sc = $(this).attr("href"),
    dn = $(sc).offset().top;
  /*
   * sc - в переменную заносим информацию о том, к какому блоку надо перейти
   * dn - определяем положение блока на странице
   */

  $("html, body").animate({ scrollTop: dn }, 1000);

  /*
   * 1000 скорость перехода в миллисекундах
   */
});

$('a[href^="#footer"]').on("click", function (event) {
  // отменяем стандартное действие
  event.preventDefault();

  var sc = $(this).attr("href"),
    dn = $(sc).offset().top;
  /*
   * sc - в переменную заносим информацию о том, к какому блоку надо перейти
   * dn - определяем положение блока на странице
   */

  $("html, body").animate({ scrollTop: dn }, 1000);

  /*
   * 1000 скорость перехода в миллисекундах
   */
});
