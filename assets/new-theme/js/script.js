$('.application-tab-head ul li').first().addClass('active');
// $('.retail').first().css("display","");
$('.application-tab-content>div').hide();
$('.application-tab-content>div').first().slideDown();
$('.application-tab-head ul li').click(function () {
  // alert("hi");
  $('.application-tab-head ul li').removeClass('active');
  var thisclass = $(this).attr('class');
  $(this).addClass('active');
  $('.application-tab-content>div').each(function () {
    if ($(this).hasClass(thisclass)) {
      $(this).fadeIn(800);
    }
    else {
      $(this).hide();
      // $('.tab-head ul li').first().addClass('active');
    }
  });
});

// Init slick slider + animation
$('.slider').slick({
  autoplay: false,
  speed: 800,
  lazyLoad: 'progressive',
  arrows: false,
  dots: true,
  infinite: false,
  vertical: true,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 575,
      settings:
       {
        dots: false,
        autoplay:false,
      }
    },

  ]
}).slickAnimation();



$('.slick-nav').on('click touch', function (e) {

  e.preventDefault();

  var arrow = $(this);

  if (!arrow.hasClass('animate')) {
    arrow.addClass('animate');
    setTimeout(() => {
      arrow.removeClass('animate');
    }, 1600);
  }

});




$('.slider5').slick({
  autoplay: false,
  speed: 800,
  lazyLoad: 'progressive',
  arrows: false,
  dots: false,
  infinite: false,
  // vertical: true,
  slidesToShow: 5.5,
  slidesToscroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 5.5,
      }
    },
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 4.5,
      }
    },
    {
      breakpoint: 1370,
      settings: {
        slidesToShow: 4.5,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3.5,
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2.5,
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        dots: true,
        slidesToShow: 2,
        variableWidth: false,
      }
    },

  ]
}).slickAnimation();



$('.slick-nav').on('click touch', function (e) {

  e.preventDefault();

  var arrow = $(this);

  if (!arrow.hasClass('animate')) {
    arrow.addClass('animate');
    setTimeout(() => {
      arrow.removeClass('animate');
    }, 1600);
  }

});

$(".maker-prev").click(function () {
  // alert('hi');
  $(".slider5").slick("slickPrev");
});

$(".slider-next").click(function () {
  // alert('hi');
  $(".slider5").slick("slickNext");
});
// $(".maker-prev").addClass("slick-disabled");
// $(".slider5").on("afterChange", function () {
// 	if ($(".maker-prev").hasClass("slick-disabled")) {
// 		$(".maker-prev").addClass("slick-disabled");
// 	} else {
// 		$(".maker-prev").removeClass("slick-disabled");
// 	}
// 	if ($(".slider-next").hasClass("slick-disabled")) {
// 		$(".slider-next").addClass("slick-disabled");
// 	} else {
// 		$(".slider-next").removeClass("slick-disabled");
// 	}
// });


$('.industry-items').slick({
  autoplay: false,
  speed: 800,
  lazyLoad: 'progressive',
  arrows: false,
  dots: false,
  infinite: false,
  // vertical: true,
  slidesToShow: 3,
  slidesToscroll: 1,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 475,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
}).slickAnimation();



$('.slick-nav').on('click touch', function (e) {

  e.preventDefault();

  var arrow = $(this);

  if (!arrow.hasClass('animate')) {
    arrow.addClass('animate');
    setTimeout(() => {
      arrow.removeClass('animate');
    }, 1600);
  }

});
$(".indus-prev").click(function () {
  // alert('hi');
  $(".industry-items").slick("slickPrev");
});

$(".indus-next").click(function () {
  // alert('hi');
  $(".industry-items").slick("slickNext");
});




// tabs

$('.tab-head ul li').first().addClass('active');
// $('.retail').first().css("display","");
$('.tab-cnt>div').hide();
$('.tab-cnt>div').first().slideDown();

$('.tab-head ul li').click(function () {

  $('.tab-head ul li').removeClass('active');

  var thisclass = $(this).attr('class');

  thisclass = thisclass.replace("up","tab-datas");

  //alert(thisclass);

  $(this).addClass('active');

  $('.tab-cnt>div').each(function () {

    //alert("Current class " + $(this).attr('class') + " Nav class " + thisclass);

    if ($(this).hasClass(thisclass)) {

      $(this).fadeIn(800);

    }
    else {
      $(this).hide();
      // $('.tab-head ul li').first().addClass('active');
    }
  });
});




//heading slider

$('.application-tab-head ul').slick({
  // autoplay: false,
  speed: 800,
  // lazyLoad: 'progressive',
  arrows: false,
  dots: false,
  // infinite: false,
  infinite: true,
  slidesToShow: 4,
  variableWidth: true,
  // touchMove: true,
  // mobileFirst: true,
  focusOnSelect: true,
  // swipeToSlide: true,
  // responsive:true,
  // responsive: [
  //   {
  //     breakpoint: 1200,
  //     settings: {
  //       slidesToShow: 4,
  //     }
  //   },
  //   {
  //     breakpoint: 960,
  //     settings: {
  //       slidesToShow: 3,
  //     }
  //   },
  //   {
  //     breakpoint: 575,
  //     settings: {
  //       slidesToShow: 2,
  //     }
  //   },
  //   {
  //     breakpoint: 475,
  //     settings: {
  //       slidesToShow: 1,
  //     }
  //   },
  // ]
});
$(".app-prev").click(function () {
  // alert('hi');
  $(".application-tab-head ul").slick("slickPrev");
});

$(".app-nxt").click(function () {
  // alert('hi');
  $(".application-tab-head ul").slick("slickNext");
});




// number count

$('.count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});

// hamburger

$('.hamburger').click(function () {
  $(this).toggleClass('open')
  $('.top-nav nav').toggleClass('open');
});