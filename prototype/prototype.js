'use strict';

var Person = function( firstName, lastName ){
  this.firstName = firstName;
  this.lastName  = lastName;
};

Object.defineProperties( Person.prototype, {
  fullName : {
    value : function(){
      return this.firstName + ' ' + this.lastName;
    }
  },
  sayHi : {
    value : function(){
      return 'Wassup, I\'m ' + this.fullName();
    }
  },
  eatCheese : {
    value : function(){
      return this.fullName() + ' wants cheese now.';
    }
  }
});

var theDude = new Person('The', 'Dude');