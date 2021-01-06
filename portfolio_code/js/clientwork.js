$(function(){
  $('.clientwork-process-chart-title').on('click', function() {
    if ($($(this).next()).css('display') == 'none') {
      $('.clientwork-process-chart-desc').slideUp();
      $('.clientwork-arrow').removeClass('clientwork-click').text('詳細を表示');
      $(this).next().slideDown();
      $(this).children('.clientwork-arrow').addClass('clientwork-click').text('閉じる');
    } else {
      $('.clientwork-process-chart-desc').slideUp();
      $(this).children('.clientwork-arrow').removeClass('clientwork-click').text('詳細を表示');
    }
  });

  /* Fancybox for PDF viewing */
  $("a.fancybox-pdf").fancybox({
    fitToView: false,
    openEffect: 'elastic',
    closeEffect: 'elastic',
    type: 'iframe',
    iframe : {
      preload: false,
      css: {
        width: '960px'
      }
    }
  });

  /* Profile Vision Tab */
  $('#clientwork-coding-tab a').on('click', function(){
    $(this).parent().addClass('coding-current').siblings().removeClass('coding-current');
    var a = $(this).attr('href');
    $(a).addClass('coding-current').siblings().removeClass('coding-current');
    return false;
  });

  /* Fancybox for Image viewing */
  $("a.clientwork-fancybox-image").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic',
    helpers   : { 
      overlay : {closeClick: true} // prevents closing when clicking OUTSIDE fancybox 
    }
  });
});