//
// File: photopile.js
// Auth: Brian W. Howell
// Date: 29 April 2014
//
// Photopile image gallery
//

var photopile = (function() {

    // Thumbnails
    var numLayers         = 5;          // number of layers in the pile (max zindex)
    var thumbOverlap      = 24;         // overlap amount (px)
    var thumbRotation     = 30;         // maximum rotation (deg)
    var thumbBorderWidth  = 6;          // border width (px)
    var thumbBorderColor  = '#fff';    // border color
    var thumbBorderHover  = '#4b7a7c';  // border hover color
    var draggable         = true;       // enable draggable thumbnails

    // Images
    var loading    = '../img/loading.gif';  // path to img displayed while gallery/thumbnails loads

    // Initializes Photopile
    function init() {

        // display gallery loading image in container div while loading
        $('.js div.photopile-wrapper').css({
            'background-repeat'   : 'no-repeat',
            'background-position' : '50%, 50%',
            'background-image'    : 'url(' + loading + ')'
        });

        // initialize thumbnails and photo container
        $('ul.photopile').children().each( function() { 
            thumb.init($(this));
        });
        //photo.init();

        // once gallery has loaded completely
        $(window).on('load', function() {
            $('.js div.photopile-wrapper').css({  // style container
                'padding' : thumbOverlap + 'px',
                'background-image' : 'none'
            }).children().css({  // display thumbnails
                'opacity' : '0',
                'display' : 'inline-block'
            });
            //navigator.init();  // init navigator
        });
    
    } // init

    var thumb = {
        // Initializes thumbnail.
        init : function( thumb ) {
            thumb.children().css( 'padding', thumbBorderWidth + 'px' );
            this.bindUIActions(thumb);
            this.setRotation(thumb);
            this.setOverlap(thumb);
            this.setRandomZ(thumb);
            thumb.css('background', thumbBorderColor );
        },

        // Binds UI actions to thumbnail.
        bindUIActions : function( thumb ) {
            var self = this;
       
            // Mouseover | Move to top of pile and change border color.
            thumb.mouseover( function() { 
                $(this).css({
                    'z-index'    : numLayers + 1,
                    'background' : thumbBorderHover 
                });
            });

            // Mouseout | Move down one layer and return to default border color.
            thumb.mouseout( function() { 
                $(this).css({
                    'z-index'    : numLayers,
                    'background' : thumbBorderColor
                });
            });

        }, // bindUIActions

        // Sets thumbnail properties.
        setOverlap  : function( thumb ) { thumb.css( 'margin', ((thumbOverlap * -1) / 2) + 'px' ); },
        setZ        : function( thumb, layer ) { thumb.css( 'z-index', layer ); },
        setRandomZ  : function( thumb ) { thumb.css({ 'z-index' : Math.floor((Math.random() * numLayers) + 1) }); },
        setRotation : function( thumb ) {
            var min = -1 * thumbRotation;
            var max = thumbRotation;
            var randomRotation = Math.floor( Math.random() * (max - min + 1)) + min;
            thumb.css({ 'transform' : 'rotate(' + randomRotation + 'deg)' });
        },

    } // thumbnail
 
    return { scatter : init }  // Photopile's 1 method API

})(); // photopile

photopile.scatter();  // ### initialize the photopile ###
