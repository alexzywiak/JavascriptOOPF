
So you got a sweet object.  Its methods and properties are the shit.  But you need to expand on it.  You need to add more awesome sweetness and you want to create a new object.  But we’re lazy and don’t want to remake our original fantabulous object, so what do we do?  

Prototypical Inheritance


1) Our first object is defined with its methods and properties as per usual.

2)  Old child object is created.  Within the child object constructor function, we use Person.call(this)

     var OldCodger = function( firstName, lastName, age ){
          Person.call(this);
          this.age = age;

Using call will instantiate a Person object with the given arguments.

3) We have created an OldCodger object with the same properties as Person, but we still need to add in the methods as inherited through the prototype.

     OldCodger.prototype = Object.create( Person.prototype, {
          
          // New Methods for OldCodger
     });

3)  If we want to override or make use of inherited methods we can use Person.prototype.method.call(this).  So if we want to expand the sayHi method from Person, we can do it like this.

     sayHi : {
         value : function(){
           return Person.prototype.sayHi.call(this) + ' ' + this.sayCatchPhrase;
         }
     }

4)  As sayHi is defined as a function in Person, we can use .call() on the Person.prototype.  If the method makes use of the get and set descriptors, we have to use Object.getOwnPropertyDescriptor()

     fullName : {
    get : (function(){
      var desc = Object.getOwnPropertyDescriptor( Person.prototype, 'fullName').get;

      return function(){
        return 'My name is ' + desc.call( this ) + ' and I am ' + this.age + ' years young.';
      };
    })()

This sucker uses a closure so that we don’t have to redefine desc each time the function is called.  Instead, it self incomes and returns a function where desc is already set to the get PropertyDescriptor from the Person prototype.



