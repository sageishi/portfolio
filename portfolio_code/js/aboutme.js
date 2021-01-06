$(function() {

  /* Profile Vision Tab */
  $('#vision-tab a').on('click', function(){
    $(this).parent().addClass('vision-current').siblings().removeClass('vision-current');
    var a = $(this).attr('href');
    $(a).addClass('vision-current').siblings().removeClass('vision-current');
    return false;
  });

});