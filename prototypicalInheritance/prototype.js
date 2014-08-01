'use strict';

var randex = function( range ){
  return Math.floor((Math.random() * range) );
};

var Person = function( firstName, lastName ){
  this.firstName = firstName;
  this.lastName = lastName;
};

Object.defineProperties( Person.prototype, {

  sayHi : {
    value : function(){
      return 'Hey there!';
    },
    enumerable : true
  },

  fullName : {
    get : function(){
      return this.firstName + ' ' + this.lastName;
    }
  },

  sayCatchPhrase : {
    get : function(){
      var index = randex( this.catchPhrases.length );
      return this.catchPhrases[ index ];
    }
  },

  addCatchPhrase : {
    value : function( newPhrase ){
      this.catchPhrases.push( newPhrase );
    },
    writable : true
  },
});

var Bro = function( firstName, lastName ){

  // Creates a new person Object
  Person.call(this, firstName, lastName );

  this.catchPhrases = [
      'Fist bump for protein powder.',
      'Did you skip leg day?',
      'My delts tore my Ed Hardy shirt.'
    ];
};

Bro.prototype = Object.create( Person.prototype, {

  sayHi : {
    value : function(){
      return 'Hey dude! ' + this.sayCatchPhrase;
    }
  }
});

var OldCodger = function( firstName, lastName, age ){

  // Creates a new person Object
  Person.call(this, firstName, lastName );
  this.age = age;

  this.catchPhrases = [
      'Get off my lawn!',
      'Where\'s my gin?',
      'You remind me of an Oriental lady I met in Siam!'
    ];
};

OldCodger.prototype = Object.create( Person.prototype, {

  sayHi : {
    value : function(){
      return Person.prototype.sayHi.call(this) + ' ' + this.sayCatchPhrase;
    }
  },

  fullName : {
    get : (function(){
      var desc = Object.getOwnPropertyDescriptor( Person.prototype, 'fullName').get;

      return function(){
        return 'My name is ' + desc.call( this ) + ' and I am ' + this.age + ' years young.';
      };
    })()
  }
});

var bob = new OldCodger( 'Bob', 'McGinness', 82 );
var brosef = new Bro('Brody', 'Philips');
