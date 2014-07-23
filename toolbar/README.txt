A super simple tool bar program.

It doesn't really do anything.  It allows you to creat a toolbar element, append it to the location of your choice within the DOM and create toolbar items.  

The toolbar items can be enabled/disabled and activated/disactivated which esstially boils down to adding color classes.

The API is as follows.


Toolbar Methods

1) Create a new tool bar element.

    This method will search the DOM for an existing toolbar element with the given ID.  
    If it exists it will add all children with the class 'tool-bar-item' as elements in the toolbar property array.
    If it doesn't already exist, it will create it without any toolbar items.

    var toolbar = oojs.createToolBar( '#toolbarId' );

    toolbar.items ==> Array of all items in the toolbar.


2) Append the Toolbar to the DOM

    Will append the created toolbar element to the DOM at given argument.

    toolbar.appendTo( 'body' );


3) Create add toolbar item

    Adds a button element with the class of 'tool-bar-item' and appends it to the toolbar element and places it within the toolbar items property array.

    Can pass in text for the button as an argument.

    toolbar.addItem('Item Text');


4) Remove toolbar item

    Removes the toolbar item at the passed index.

    toolbar.removeItem( index );


Toolbar Item Methods

1) enabled
  
    Can check if the given item is enabled.
    Can set the enabled property to true or false.
    If enabled, it gets the class of ('btn-primary')

    toolbar.items[0].enabled // Returns true or false
    toolbar.items[0].enabled = true; // Enables the button


2) activated


    Can check if the given item is activated.
    Can set the activated property to true or false.
    If activated, it gets the class of ('btn-success')

    toolbar.items[0].activated // Returns true or false
    toolbar.items[0].activated = true; // Enables the button

3) toggleActivate

    Toggles the activated property for the given toolbar item.

    toolbar.item[0].toggleActivate() 