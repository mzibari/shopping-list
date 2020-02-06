$(function (){
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();
        const newItem = $(this).find('input[name=shopping-list-entry]').val();
        $('.shopping-list').append(`<li>\
            <span class="shopping-item">${newItem}</span>\
            <div class="shopping-item-controls">\
              <button class="shopping-item-toggle">\
                <span class="button-label">check</span>\
              </button>\
              <button class="shopping-item-delete">\
                <span class="button-label">delete</span>\
              </button>\
            </div>\
          </li>`);




    });//end of the shopping list submit function




});//end of the main function