$(function() {

	// import banner svg file
  var box = document.getElementById("banner-svg");
  fetch("../img/banner.svg")
    .then(function(response) {
      return response.text();
      }).then(function(svg) {
      box.innerHTML = svg
  });

  // header-sp drawer
  $('#header-sp-btn').on('click', function(){
    $(this).toggleClass('nav-click');
    $('.gnav-drawer').toggleClass('nav-click');
    $('.gnav-drawer-bg').toggleClass('nav-click');
  });

  // anchor scroll
  $('a.scrollLink[href^="#"]').on('click',function() {
    var href= $(this).attr('href');
    var target = $(href);
    if (window.matchMedia('(max-width: 767px)').matches) {
      var windowWidth = 90; 
      if ($('#header-sp-btn').hasClass('nav-click')) {
        $('#header-sp-btn').toggleClass('nav-click');
        $('.gnav-drawer').toggleClass('nav-click');
        $('.gnav-drawer-bg').toggleClass('nav-click');
      }
    } else {
      var windowWidth = 150;
    }
    var position = target.offset().top - windowWidth;
    $('body,html').animate({scrollTop:position}, 260, 'swing');
    return false;
  });

  // Google Map Toggle
    $('#gmap-btn').on('click', function() {
      $(this).css("display", "none");
      $('#access-gmap').css("display", "block");
    });
  // $('#access-gmap').delay(8000).fadeIn(400);

  // News List Button
  let newsFlag = 'off';
  $('#newslist-btn').on('click', function(){
    if (newsFlag == 'off') {
      $(this).text('閉じる');
      newsFlag = 'on';
    } else {
      $(this).text('さらに表示');
      newsFlag = 'off';
    };
    $('.news-list dt:nth-of-type(n + 4)').slideToggle(300);
    $('.news-list dd:nth-of-type(n + 4)').slideToggle(300);
    $(this).toggleClass('news-click');
  });

  // Google Form Function
  $('#contact-gform').submit(function (event) {
    var formData = $('#contact-gform').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdvbj0LfL59svfut1i8wrb77abQ4W-10lTG-xpVrl2AiRhxLg/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function(){
          window.location.href = "../index.html#contact";
          },
        200: function(){
        //失敗したときの処理
        }
      }
    });
    // Cancel redirection to google form
    event.preventDefault();
    $('#contact-gform')[0].reset();
    $('.alert').addClass('display-alert');
  });

  // socialfloating display after header
  $(document).scroll(function() {
    var scrollY = ($(this).scrollTop()) * 1.5;
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (scrollY > $(window).height()) {
        $('.contact-bar').fadeIn();
      } else {
        $('.contact-bar').fadeOut();
      };
    }
  });

  // socialfloating settings
  $.socialfloating({
    theme: 'light',
    opaque: false,
    effect: 'scroll',
    icons: 'fontawesome4',
    showHidebutton: true,
    container: 'socialfloating',
    position: 'left',
    buttons: [
      {
        enabled: true,
        icon: 'fa fa-facebook',
        name: 'facebook',
        link: 'https://www.facebook.com" target="_blank',
        title: 'Facebookでフォローする',
        color: '#3b5998'
      },
      {
        enabled: true,
        icon: 'fa fa-instagram',
        name: 'instagram',
        link: 'https://www.instagram.com" target="_blank',
        title: 'instagramでフォローする',
        color: '#3f729b'
      },
      {
        enabled: true,
        icon: 'fa fa-twitter',
        name: 'twitter',
        link: 'https://www.twitter.com" target="_blank',
        title: 'Twitterでフォローする',
        color: '#1da1f2'
      },
      {
        enabled: true,
        icon: 'fa fa-pinterest-p',
        name: 'pinterest',
        link: 'https://www.pinterest.com" target="_blank',
        title: 'Pinterestでフォローする',
        color: '#c8232c'
      },
      {
        enabled: true,
        icon: 'fa fa-phone',
        name: 'phone',
        link: 'tel:0312345678',
        title: '電話する',
        color: '#53d769'
      },
      {
        enabled: true,
        icon: 'fa fa-envelope-o',
        name: 'email',
        link: 'mailto:info@joesgarden.jp',
        title: 'メールする',
        color: '#5fc9f8'
      }
    ]
  });

	// Initial Materialize - Carousel
  $('.carousel').carousel({
    indicators: true
  });

  //$('div.panel-inner').featherlight();

	// featherlight Gallery
  $('.flower-a').featherlightGallery({
		gallery: {
			fadeIn: 300,
			fadeOut: 300
		},
		openSpeed: 300,
		closeSpeed: 300,
		beforeOpen: function(event){
			if (!$(event.target).parents('li').hasClass('active')) {
				$('html').removeClass('with-featherlight');
        return false; 
			}
		}
	});

	// drawer
	$('.drawer').drawer({
    iscroll: {
      scrollX: false,
      scrollY: true,
      click: true,
      mouseWheel: false,
      disablePointer: true,
      disableTouch: false,
      disableMouse: false
      //preventDefault: false
    }
	});

  $('.drawer').on('drawer.opened', function(){
    $('.menu-close').addClass('drawer-open');
    $('.scroll-up').addClass('drawer-open');
    $('.scroll-down').addClass('drawer-open');
  });

  /* $('.drawer').on('drawer.closed', function(){
    $('.menu-close').removeClass('drawer-open');
  }); */

  $('.drawer-toggle').on('click',function() {
    $('.menu-close').removeClass('drawer-open');
    $('.scroll-up').removeClass('drawer-open');
    $('.scroll-down').removeClass('drawer-open');
  });

  $('div.drawer-nav').scroll(function () {
    if ($('div.drawer-nav').scrollTop() > 100) {
        $('.scroll-up').addClass('drawer-open');
    } else {
        $('.scroll-up').removeClass('drawer-open');
    }
    if ((($('div.drawer-menu').height()) - ($('div.drawer-nav').scrollTop())) > 600) {
        $('.scroll-down').addClass('drawer-open');
    } else {
        $('.scroll-down').removeClass('drawer-open');
    }
  });



});


// ALERT BOX
// Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
};