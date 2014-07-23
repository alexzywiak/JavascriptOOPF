Not true inheritance

Parasitic inheritance does not make use of the prototype object, so it is not true inheritance as the prototype object is the mechanism by which JS does true inheritance.

Essentially you create a new factory function.  Inside that factory function you create the object you wish to inherit from, and then you modify it by adding properties.

Ex.

var makeFratBoy = function( firstName, lastName, douchebagRating ){
     var person = makePerson( firstName, lastName )
     
     person.douchebagRating = douchebagRating;

     return person;

This mechanism of inheritance seems to be OK for simple jobs without overriding too many members of the parent.

Overwriting parent members

The key theme to OOP is apparently to reuse and not recreate.  To overwrite a parent member, you can make use of the 

Object.getOwnPropertyDescriptor( object, ‘descriptorString') 

function.  This function returns an object that has access to all the properties that can be defined in Object.defineProperties such as writable, enumerable, get and set.

So if you want to overwrite a parent member, you can access the function through getOwnPropertyDescriptor.  The problem is, it won’t execute in the right context.  So .bind to the rescue.

.bind()


.bind will return a new function within the context of the passed object.  It will allow the this keyword in the body of the function to refer to the passed object instead of either the parent object or the global object.

Add method to person “Say Hello” return string that says ‘Hi There’ .  Overwrite say hello method and add my name is + name.