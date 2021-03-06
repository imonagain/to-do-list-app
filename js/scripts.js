function newItem() {

    //jQuery
    //1. Adding a new item to the list of items:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    $('#submit')[0].reset();

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
    }

    // Add to list via enter keypress and clear input
    $(document).keypress(function (e) {
        var toAdd = $('input').val();
        if (e.which == 13) {
            $('ol').append('<li>' + toAdd + '</li>');
            $('#submit')[0].reset();
                e.preventDefault();
        }
    });

    //2. Crossing out an item from the list of items:
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    //3. Adding the delete button "X":
    let crossOutButton = $('<crossOutButton></crossOutButton>');

    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    function deleteListItem() {
        li.addClass('delete')
    }
    // 4. Reordering the items:
    $('#list').sortable();

}