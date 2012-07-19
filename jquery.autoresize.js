
if(typeof jQuery != "undefined" ) {

    $fn.growBox = function() {

        var el = $(this).css('resize','none')
          , oh = $(el).data('original-height');

        if ( typeof oh == "undefined" )
            $(el).data('original-height', $(el).outerHeight() );

        var lh = Math.ceil( parseInt( $(el).css('line-height') ) )
          , nl = $(el).val().split('\n').length
          , cl = $(el).val().length
          , cw = 8
          , tw = $(el).width() / cw
          , lines = Math.ceil( cl / tw + nl )
          , nh = lines * lh + lh;

        if( nh > lh * 12 ) {
            $(el).css({ height: lh * 12 });
            return $(el).css({'overflow-y':'auto'});
        } else {
            $(el).css({'overflow-y': 'hidden'})
            return el.css({ height: nh });
        }
    }
}

