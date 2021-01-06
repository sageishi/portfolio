$(function(){
  /* Coding Practice Basic Tab */
  $('#coding-basic-tab a').on('click', function(){
    $(this).parent().addClass('coding-current').siblings().removeClass('coding-current');
    var a = $(this).attr('href');
    $(a).addClass('coding-current').siblings().removeClass('coding-current');
    return false;
  });

  /* Coding Practice Javascript Tab */
  $('#coding-javascript-tab a').on('click', function(){
    $(this).parent().addClass('coding-current').siblings().removeClass('coding-current');
    var a = $(this).attr('href');
    $(a).addClass('coding-current').siblings().removeClass('coding-current');
    return false;
  });

  /* Fancybox for Image viewing */
  // $("a.website100-fancybox-image").fancybox({
  //   openEffect: 'elastic',
  //   closeEffect: 'elastic',
  //   helpers   : { 
  //     overlay : {closeClick: true} // prevents closing when clicking OUTSIDE fancybox 
  //   }
  // });
});