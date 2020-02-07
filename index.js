$(function () {
  //This event listner will listen to when the add item button in pressed 
  $("#js-shopping-list-form").submit(event => {
    event.preventDefault();

    //Retrieving the new item from the input element and storing it in newItem varible
    const newItem = $(this).find('input[name=shopping-list-entry]').val();

    //Adding the new list item to the <ul> using the .append() method
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
  

  //Checking off items using event delegation
  $('ul').on('click', 'button[class="shopping-item-toggle"]', function (event) {
    //Using .closest() method will only select direct ancestors, so I moved up the tree to <li> ancestor,
    //then moved down to its child <span> using .find() method, then toggeled the class using .toggleClass()
    $(this).closest('li').find('span.shopping-item').toggleClass(' shopping-item__checked');

  });//end of check function

  //Deleting items again using event delegation
  $('ul').on('click', 'button[class="shopping-item-delete"]', function (event) {
    //Since <li> is a direct ancestor, I only needed to use .closest() method then .remove() method to delete item
    $(this).closest('li').remove();

  });//end of delete function



});//end of the main function