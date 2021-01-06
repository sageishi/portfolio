$(function() {

  /* Load each section */
  $('#aboutme').load('aboutme/index.html');
  $('#clientwork').load('clientwork/index.html');
  $('#website100').load('website100/index.html');
  $('#coding').load('coding_practice/index.html');
  $('#gallery').load('gallery/index.html');

  /* Smooth Scrolling */
  $('a[href^="#"]').on('click', function() {
    var speed = 400;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    if (href == '#website100') {
      var position = target.offset().top - 200;
    } else if (href == '#gallery') {
      var position = target.offset().top - 200;
    } else {
      var position = target.offset().top - 60;
    }
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

/* Setting when scrolling */
$(window).on('load resize',function(){
  var pos01 = 0;
  var pos02 = Math.round($('#aboutme').offset().top - 60);
  var pos03 = Math.round($('#clientwork').offset().top - 300);
  var pos04 = Math.round($('#website100').offset().top - 400);
  var pos05 = Math.round($('#coding').offset().top - 200);
  var pos06 = Math.round($('#gallery').offset().top - 400);

  /* Set class on nav */
  $(window).on('load resize scroll',function(){
    var posScroll = $(window).scrollTop();
    if (pos01 <= posScroll && posScroll < pos02) {
      $('#list01').addClass('current').siblings('li').removeClass('current');
    } else if (pos02 <= posScroll && posScroll < pos03) {
      $('#list02').addClass('current').siblings('li').removeClass('current');
    } else if (pos03 <= posScroll && posScroll < pos04) {
      $('#list03').addClass('current').siblings('li').removeClass('current');
    } else if (pos03 <= posScroll && posScroll < pos05) {
      $('#list04').addClass('current').siblings('li').removeClass('current');
    } else if (pos03 <= posScroll && posScroll < pos06) {
      $('#list05').addClass('current').siblings('li').removeClass('current');
    } else if (pos04 <= posScroll && posScroll) {
      $('#list06').addClass('current').siblings('li').removeClass('current');
    }
  });

  /* Move header when nav is on top */
  $(window).on('load resize scroll',function(){
    var posScroll = $(window).scrollTop();
    if (pos02 <= posScroll) {
      $('#page-header').addClass('nav-at-top');
    } else {
      $('#page-header').removeClass('nav-at-top');
    }
  });

  
});