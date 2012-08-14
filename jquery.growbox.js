(function($){
    $.extend({
        growBox: function(options) {

            options = $.extend({ filter: 'textarea', growth: 10, char_width: 8, onResize: function() {} }, options);

            var grow = function(e) {

                if ( typeof $(this).data('original-height') == "undefined"  ) {
                    $(this).css('resize','none')
                    $(this).data('original-height', $(this).outerHeight());
                }

                var lh = Math.ceil( parseInt( $(this).css('line-height') ) )
                  , nl = $(this).val().split('\n').length
                  , cl = $(this).val().length
                  , cw = options.char_width
                  , tw = $(this).width() / cw
                  , lines = Math.ceil( cl / tw + nl )
                  , nh = lines * lh + lh;

                if( nh > lh * options.growth ) {
                    $(this).css({ height: lh * options.growth, 'overflow-y':'auto' });
                } else {
                    $(this).css({ height: nh, 'overflow-y': 'hidden'});
                }

                if(!e) return;
                return options.onResize.apply(this);

            }

            $(document).off('keyup.growbox keydown.growbox keypress.growbox focus.growbox');
            $(document).on('keyup.growbox keydown.growbox keypress.growbox focus.growbox', options.filter, grow);

            $(options.filter).each(function(){
                grow.apply(this);
            });

        }
    });
})(jQuery);
