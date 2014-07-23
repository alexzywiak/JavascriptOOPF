'use strict';
/* global debug:false */

var createPerson = function( firstName, lastName ){

  var person = {
    firstName : firstName,
    lastName  : lastName
  };

  Object.defineProperties( person, {

    greeting : {
      value : 'Hi there!',
      configurable : true
    },
    fullName : {
      get : function(){
        return this.firstName + ' ' + this.lastName;
      }
    },
    sayHi : {
      get : function(){
        return this.greeting;
      },
      configurable : true
    }
  });

  return person;
};

var createFratBoy = function( firstName, lastName, douchebag ){

  var fratBoy = createPerson( firstName, lastName );

  fratBoy.douchebag = douchebag;

  var fullName         = Object.getOwnPropertyDescriptor( fratBoy, 'fullName' ),
      fullNameFunction = fullName.get.bind( fratBoy ),
      sayHi            = Object.getOwnPropertyDescriptor( fratBoy, 'sayHi' ),
      sayHiFunction    = sayHi.get.bind( fratBoy );

  Object.defineProperties( fratBoy, {
    greeting : {
      value : 'Wassup dude?',
      configurable : true
    },
    howLame : {
      get : function(){
        return fullNameFunction() + ' is a ' + this.douchebag + ' douchebag.';
      }
    },
    sayHi : {
      get : function(){
        return sayHiFunction() + ' My name is ' + this.firstName + ' bro.  My dad owns a dealership.';
      }
    }
  });

  return fratBoy;
};

var yossarian = createPerson('John', 'Yossarian');
var brody = createFratBoy('Brody', 'Phillips', 'total');


