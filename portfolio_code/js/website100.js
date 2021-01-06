$(function(){
  /* Website100 Summary Tab */
  $('#website100-summary-tab a').on('click', function(){
    $(this).parent().addClass('summary-current').siblings().removeClass('summary-current');
    var a = $(this).attr('href');
    $(a).addClass('summary-current').siblings().removeClass('summary-current');
    return false;
  });

  /* Fancybox for Image viewing */
  $("a.website100-fancybox-image").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic',
    helpers   : { 
      overlay : {closeClick: true} // prevents closing when clicking OUTSIDE fancybox 
    }
  });
});