### Examples

```javascript

    // on init it will initialize for keyup keydown and focus
    $('textarea').growBox();

    // if you change the content dynamically there are a few ways ...
    $.ajax({ /* ... */, onSuccess: $.fn.growBox.apply(el)  });

    // .. that you can automatically resize
    $.ajax({ /* ... */, onSuccess: function() { /* ... */ $(el).growBox(); } });

```
