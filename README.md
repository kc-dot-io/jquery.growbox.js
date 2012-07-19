### Examples

```javascript

    $(el).growBox(); // on init it will initialize for keyup keydown and focus
    $.ajax({ /* ... */, onSuccess: $.fn.growBox.apply(el)  }); // if you change the content dynamically there are a few ways ...
    $.ajax({ /* ... */, onSuccess: function() { /* ... * / $(el).growBox(); } }); // .. that you can automatically resize

```
