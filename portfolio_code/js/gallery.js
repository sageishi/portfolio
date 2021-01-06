$(function(){

  /* Mixitup Setup */
  var mixer = mixitup('.photopile');
  
  /* Use Mixitup to Filter for Fancybox */
  var galleryFilter = 'all';

  $('#gallery-all').on('click', function() {
    if (galleryFilter === 'photo') {
      $('.gallery-ill-ps').attr('data-fancybox','gallery');
      galleryFilter = 'all';
    } else if (galleryFilter === 'artwork') {
      $('.gallery-photography').attr('data-fancybox','gallery');
      galleryFilter = 'all';
    }
  });

  $('#gallery-photography').on('click', function() {
    if (galleryFilter === 'all') {
      $(".gallery-ill-ps").removeAttr("data-fancybox");
      galleryFilter = 'photo';
    } else if (galleryFilter === 'artwork') {
      $(".gallery-ill-ps").removeAttr("data-fancybox");
      $('.gallery-photography').attr('data-fancybox','gallery');
      galleryFilter = 'photo';
    }
  });

  $('#gallery-ill-ps').on('click', function() {
    if (galleryFilter === 'all') {
      $(".gallery-photography").removeAttr("data-fancybox");
      galleryFilter = 'artwork';
    } else if (galleryFilter === 'photo') {
      $(".gallery-photography").removeAttr("data-fancybox");
      $('.gallery-ill-ps').attr('data-fancybox','gallery');
      galleryFilter = 'artwork';
    }
  });


  /* Fancybox for Image viewing */
  $('[data-fancybox="gallery"]').fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic',
    loop: true,
    helpers   : { 
      overlay : {closeClick: true} // prevents closing when clicking OUTSIDE fancybox 
    }
  });


  
});