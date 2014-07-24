Why Prototypes

     When you need to create multiple instances of an object, it is best to use prototypes and constructor functions as opposed to object literals and factory functions.  With a prototype, you get access to the instanceof reference so you can check to see if you got the right object.  Also, it’s better on memory and system speed as you only need to create the method function objects once, instead of each time you create a new object.  Prototypes are also the preferred method with dealing with inheritance so it is easier to override methods on child objects.


How to build Constructor —> new Keyword

     Constructor functions have the first letter of the name capitalised and don’t require a return statement.  They make use of the this keyword to set the properties on initialisation.  Initialisation is automatically dealt with by using the new keyword.

var Person = function( firstName, lastName ){
     this.firstName = firstName;
     this.lastName = lastName;
};

var dude = new Person( ‘The’, ‘Dude’);

Where to define methods

You should define methods on a prototype object if you are going to make multiple instances of your object.  This cuts down on repetition and memory mumbly jumbo.

     Person.prototype.sayHi = function(){ return ‘I’m the Dude!’; };

     Privacy and Closure - JS has no privacy.  There are ways to fake it using closures, but it’s best just to deal with it and make everything public.  A common practice is to prepend a private variable name with _variable so that future developers will know what’s off limits.

Prototype Object

     Define properties on prototype:

     Object.defineProperties( Person.prototype, {
         sayHi : {
               value : function(){ return ‘I’m the Dude!’; };
          },
          // Other Methods
     });
     
     hasOwnProperty —> How JS searches for properties / methods Chain of prototype chain

      Javascript will return false for hasOwnProperty() if an object’s methods are defined on the the prototype.  The object can still use them normally though.  Whenever a property is called on an Object, JS searches down the first on the object itself, and then down the prototype chain until it is found, with Object.prototype as the final desitination.
