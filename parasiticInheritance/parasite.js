'use strict';
/* global debug:false */

var createPerson = function( firstName, lastName ){

  var person = {
    firstName : firstName,
    lastName  : lastName,
    sayHi     : function(){
      return this.greeting;
    }
  };

  Object.defineProperties( person, {

    greeting : {
      value : 'Hi there!',
      configurable : true
    },
    fullName : {
      get : function(){
        return this.firstName + ' ' + this.lastName;
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
      fullNameFunction = fullName.get.bind( fratBoy );

  Object.defineProperties( fratBoy, {
    greeting : {
      value : 'Wassup dude?',
      configurable : true
    },
    pretension : {
      value : 'My Dad owns a dealership'
    },
    fullName : {
      get : function(){
        return fullNameFunction() + ' is a ' + this.douchebag + ' douchebag.';
      }
    }
  });

  var sayHiFn = fratBoy.sayHi.bind( fratBoy );

  fratBoy.sayHi = function(){
    return sayHiFn() + ' My name is ' + this.fullName + '. ' + this.pretension + '.';
  };

  return fratBoy;
};

var yossarian = createPerson('John', 'Yossarian');
var brody = createFratBoy('Brody', 'Phillips', 'total');


