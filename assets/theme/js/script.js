$(document).ready(function () {
  initSliders();

  // $(".first-sub-nav li").hover(
  //   function () { 
  //     if($(this).find('ul') == true){
  //       $(".first-sub-nav li").addClass('icon')
  //     }
  //     // $(this).addClass("open-icon");
  //   },
  //   function () {
  //     $(this).removeClass("open-icon");
  //   }
  // );


  // sticky header

  // const toggleClass = "is-sticky";
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      $('header').addClass("is-sticky");
    } else {
      $('header').removeClass("is-sticky");
    }
  });




  if ($(window).width() < 1200) {
    $(".role-selector").click(function () {
      var is_open = $(this).hasClass("open");
      if (is_open) {
        $(this).removeClass("open");
      } else {
        $(this).addClass("open");
      }
    });

    // $(".role-selector li").click(function () {

    //   var selected_value = $(this).html();
    //   var first_li = $(".role-selector li:first-child").html();

    //   $(".role-selector li:first-child").html(selected_value);
    //   $(this).html(first_li);

    // });

    $(document).mouseup(function (event) {

      var target = event.target;
      var select = $(".role-selector");

      if (!select.is(target) && select.has(target).length === 0) {
        select.removeClass("open");
      }

    });
  }


  if ($(window).width() < 768) {
    $(".stats-list").slick({
      dots: false,
      autoplay: false,
      arrows: false,
      infinite: false,
      slidesToShow: 2.1,
      slidesToScroll: 1,      
      
    })
      // .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      //   //alert("Yoyo");
      //   //$('#draggableDiv').drag();
      //   var e = window.event;
      //   e.preventDefault();
      //   var div = document.getElementById('draggableDiv');
      //   div.style.position = 'absolute';
      //   //div.style.top = e.clientY + 'px';
      //   if(e.clientX<320)
      //   {
      //     div.style.left = e.clientX + 'px';
      //   }
      //   else
      //   {
      //     div.style.left = '0px';
      //   }
        
      // });


      $(".blog-main").slick({
        dots: false,
        autoplay: false,
        arrows: false,
        infinite: false,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        margin:10,
        
      })


  }

  //   $('.stats-list').slick().on("beforeChange", (event, slick, currentSlide, nextSlide) => {
  //     changeColors("Move Div");
  // });

  // $(".stats-list").slick().on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //   changeColors("Move Div");
  // });

  // $('#draggableDiv').draggable({
  //   drag: function () {
     

  //     $(".stats-list").slick('slickGoTo', indexVal);
  //     indexVal = indexVal + 1;
  //     if (indexVal > 2) {
  //       indexVal = 1;
  //     }
  //   },
  //   axis: 'x',
  //   containment: '.stats-list-bar',
  //   stop: function () {
    
  //   }

  // });

  var indexVal = 1;
  // $(".stats-list").click(function(e){
  //     e.preventDefault();
  //     $( ".stats-list" ).slick('slickGoTo',indexVal);
  //     indexVal=indexVal+1;
  //     if(indexVal>2){
  //     indexVal=1;
  //     }
  // });

  //   var myDraggable = Draggable.create(".stats-touch-bar", {
  //     type:"x",
  //     bounds:".stats-list-bar",
  //     edgeResistance:1,
  //     throwProps:true
  //     // drag: function(){
  //     //   $('.stats-list').css('left',$(this).position().left);  
  //     // }
  //   });

  //   myDraggable.draggable({
  //     axis: 'x',
  //     containment: '.stats-list-bar',
  //     drag: function(){
  //         $('.stats-list').css('left',$(this).position().left);  
  //     }

  // });

  //const slider = document.querySelector('.stats-touch-bar');

  // slider.addEventListener('mousemove', (e) => {
  //   // if(!isDown) return;
  //   // e.preventDefault();
  //   // const x = e.pageX - slider.offsetLeft;
  //   // const walk = (x - startX) * 3; //scroll-fast
  //   // slider.scrollLeft = scrollLeft - walk;
  //   // console.log(walk);
  //   alert("moving")
  // });

  // $(".stats-touch-bar").draggable({
  //   type:"x",
  //   bounds:".stats-list-bar",
  //   edgeResistance:1,
  //   throwProps:true
  // });

  // $(".stats-touch-bar").draggable({ 
  //   type: "x", 
  //   bounds:".stats-list-bar",
  //   edgeResistance:1,
  //   throwProps:true
  // });

});

function initSliders() {
  // $(".benefits-list").slick({
  //   infinite: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   appendArrows: ".benefits-wrapper",
  //   prevArrow:
  //     '<span class="arrow-left"></span>',
  //   nextArrow:
  //     '<span class="arrow-right"></span>',
  //   responsive: [
  //     {
  //       breakpoint: 1366,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 630,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       }
  //     }

  //   ]
  // });
  // $('.arrow-left').click(function (e) {
  //   //e.preventDefault(); 
  //   $('.benefits-list').slick('slickPrev');
  // });
  $(".advisory-list").slick({
    lazyLoad: 'ondemand',  
    infinite: false,
    slidesToShow: 4.20,
    slidesToScroll: 1,
    centerMode: false,
    appendArrows: ".advisory-council-wrapper",
    prevArrow:
      '<span class="arrow-left"></span>',
    nextArrow:
      '<span class="arrow-right"></span>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3.20,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          // centerMode: true,
        }
      }
    ]
  });
  // 
  $(".join-list-step").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: ".how-to-step",
    prevArrow:
      '<span class="arrow-left"></span>',
    nextArrow:
      '<span class="arrow-right"></span>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  // 


}



// sub nav add active class


$("ul li").on('click', function () {
  $('ul li.selected').removeClass("selected");
  $(this).toggleClass("selected");  // adding active class
});



// $(".category-selector span").on('click',function(){
//   $('.category-selector span.selected').removeClass("selected");
//   $(this).addClass("selected");  // adding active class
// });

// mobile nav open


$(".menu-icon").on('click', function () {
  $('nav').toggleClass("nav-open");
  $('body').toggleClass("fixed");
  // $(this).addClass("selected");  // adding active class
});


  $(".menu-icon").on("click", function(e) {
    $(".extra-menu").toggleClass("nav-open");
    e.stopPropagation()
  });
  $('body').on("click", function(e) {
    if ($(e.target).is(".extra-menu") === false && e.target.className != "nclose") {
      $(".extra-menu").removeClass("nav-open");
      $('.menu-icon').removeClass("active");
      $('nav').removeClass("nav-open");
      $(this).removeClass("fixed");
      // McButton.velocity("reverse");
      McBar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
            .velocity({ top: "100%" }, {duration: 200, easing: "swing"});
            McBar1.velocity({ top: "0%" }, {duration: 200, easing: "swing"}); 
            McButton.velocity({rotateZ:"0deg"}, { delay: 200});
    }
  });

// $(".menu-icon.close").on('click', function () {
//   // $(this).removeClass('close');
//   $('.extra-menu').removeClass("nav-open");
//   // $('body').addClass("fixed");
//   // $(this).addClass("selected");  // adding active class
// });

// hamburger animation

var McButton = $("[data=hamburger-menu]");
var McBar1 = McButton.find("span:nth-child(1)");
var McBar2 = McButton.find("span:nth-child(2)");
var McBar3 = McButton.find("span:nth-child(3)");



McButton.click( function() {
  $(this).toggleClass("active");

  if (McButton.hasClass("active")) {
    McBar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
    McBar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
    			.velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
    McButton.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
  } else {
    McButton.velocity("reverse");
		McBar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
    			.velocity({ top: "100%" }, {duration: 200, easing: "swing"});
  	McBar1.velocity("reverse", {delay: 800});
  }
});

// $(".benefits-wrapper .arrow-left").on('click',function(){
//   alert('working');
// });


// tab section

$('.categories-tab span').first().addClass('selected');
// $('.retail').first().css("display","");
// $('.tab-content>div').hide();
$('.categories-cnt>div').first().slideDown();
$('.categories-tab span').click(function () {
  //alert("hi");
  $('.categories-tab span').removeClass('selected');

  var thisclass = $(this).attr('class');
  var split=thisclass.split(" ");

  thisclass = split[0];

  $(this).addClass('selected');
  $('.categories-cnt>div').each(function () {
    if ($(this).hasClass(thisclass)) {
      $(this).fadeIn(800);
    }
    else {
      $(this).hide();
      // $('.tab-head ul li').first().addClass('active');
    }
  });
});


$('.re-define-tab span').first().addClass('selected');
// $('.retail').first().css("display","");
// $('.tab-content>div').hide();
$('.re-define-cnt>div').first().slideDown();
$('.re-define-tab span').click(function () {
  // alert("hi");
  $('.re-define-tab span').removeClass('selected');
  var thisclass = $(this).attr('class');
  var split=thisclass.split(" ");

  thisclass = split[0];
  
  $(this).addClass('selected');
  $('.re-define-cnt>div').each(function () {
    if ($(this).hasClass(thisclass)) {
      $(this).show();
    }
    else {
      $(this).hide();
      // $('.tab-head ul li').first().addClass('active');
    }
  });
});



// $('.role-selector span').first().addClass('selctor');
// $('.retail').first().css("display","");
// $('.tab-content>div').hide();
$('.role-cnt>div').first().slideDown();
$('.role-selector li').click(function () {

  curDiv = $(this).attr('name');


  // alert("hi");
  $('.role-selector li').removeClass('selctor');
  var thisclass = $(this).attr('class');
  $(this).addClass('selctor');
  $('.role-cnt>div').each(function () {
    if ($(this).hasClass(thisclass)) {
      $(this).fadeIn(800);
    }
    else {
      $(this).hide();
      // $('.tab-head ul li').first().addClass('active');
    }
  });

  updateTotalAndCurrent();

});

// Start: only for Mobile

// Start : at a time one checkBox only checked
$("input:checkbox").on('click', function() {
  var $box = $(this);
  if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});
// End : at a time one checkBox only checked


// End: only for mobile

// Start: only for Mobile

// Start : at a time one checkBox only checked
$("input:checkbox").on('click', function() {
  var $box = $(this);
  if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});
// End : at a time one checkBox only checked

// Start : li Onclick only for Mobile
$('.role_selector li').click(function () {

// Start : When clicking on li CheckBox will check
  var find = $(this).find('input.li_input').val();
  console.log(find);
  if(find == "sell"){
    $('#sell').prop("checked",true);
    $('#create-buyer').prop("checked",false);
    $('#software').prop("checked",false);
    $('#other').prop("checked",false);
    $('#buy').prop("checked",false);
  }
  else if(find == "create-buyer"){
    $('#create-buyer').prop("checked",true);
    $('#software').prop("checked",false);
    $('#other').prop("checked",false);
    $('#buy').prop("checked",false);
    $('#sell').prop("checked",false);
  }
  else if(find == "software"){
    $('#software').prop("checked",true);
    $('#other').prop("checked",false);
    $('#buy').prop("checked",false);
    $('#sell').prop("checked",false);
    $('#create-buyer').prop("checked",false);
  }
  else if(find == "other"){
    $('#other').prop("checked",true);
    $('#buy').prop("checked",false);
    $('#sell').prop("checked",false);
    $('#create-buyer').prop("checked",false);
    $('#software').prop("checked",false);
  }
  else if(find == "buy"){
    $('#buy').prop("checked",true);
    $('#sell').prop("checked",false);
    $('#create-buyer').prop("checked",false);
    $('#software').prop("checked",false);
    $('#other').prop("checked",false);
  }
// End : When clicking on li CheckBox will check

// Start : When Clicking on li FontWeight will change
  $('.role_selector li').css("font-weight","400");
  $(this).css("font-weight","600");
// End : When Clicking on li FontWeight will change

  curDiv = $(this).attr('name');
  $('.role_selector li').removeClass('selctor');
  var thisclass = $(this).attr('class');
  $(this).addClass('selctor');
  $('.role-cnt>div').each(function () {
    if ($(this).hasClass(thisclass)) {
      $(this).fadeIn(800);
    }
    else {
      $(this).hide();
    }
  });

  updateTotalAndCurrent();

});
// End : li Onclick only for Mobile

// End: only for mobile

function updateTotalAndCurrent() {

  QuestionIndex = 1;

  var classes = document.getElementById(curDiv).getElementsByClassName("slide-cnt");

  $("#" + curDiv + " #currentQuestion").html(QuestionIndex);
  $("#" + curDiv + " #totalCount").html(classes.length);

}

var QuestionIndex = 1, curDiv = "";

function loadQuestion(increment) {
  var classes = document.getElementById(curDiv).getElementsByClassName("slide-cnt");

  var index = QuestionIndex - 1;

  classes[index].classList.add("d-none");

  if (increment == 1) {
    QuestionIndex++;

    classes[index + 1].classList.remove("d-none");
  }
  else if (increment == -1) {
    QuestionIndex--;

    classes[index - 1].classList.remove("d-none");
  }

  if (classes.length == QuestionIndex) {
    $("#" + curDiv + " #btnNext").addClass("d-none");
  }
  else {
    $("#" + curDiv + " #btnNext").removeClass("d-none");
  }

  if (QuestionIndex == 1) {
    $("#" + curDiv + " #btnBack").addClass("d-none");
  }
  else {
    $("#" + curDiv + " #btnBack").removeClass("d-none");
  }

  $("#" + curDiv + " #currentQuestion").html(QuestionIndex);
  //$("#totalCount").html(classes.length);

}
// button toggle

$(".answer-key span").on('click', function () {
  $('.answer-key span.ans-select').removeClass("ans-select");
  $(this).addClass("ans-select");  // adding active class
});

 //To set active menu highlight
 $(document).ready(function($){
  // Get current path and find target link
  var path = window.location.pathname;
 
  // Account for home page with empty path
  if ( path == '' ) {
    path = '/';
  }
   
  var target = $('nav .main-navs li a[href="'+path+'"]');
  // Add active class to target link
    target.parent('li').addClass('selected');
});