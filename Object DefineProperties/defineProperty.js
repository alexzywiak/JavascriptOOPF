'use strict';
/*global debug:false */

var makeCharacter = function( firstName, lastName, job ){
  
  var character = {};

  Object.defineProperties( character, {
    firstName:{
      value : firstName,
      enumerable : true
    },
    lastName : {
      value : lastName,
      enumerable : true
    },
    job : {
      value : job,
      writable : true,
      enumerable : true
    },
    fullName : {
      get : function(){
        return this.firstName + ' ' + this.lastName;
      },
      enumerable : true
    },
    getJob : {
      get : function(){
        return this.lastName + '\'s job is ' + this.job;
      },
      enumerable : true
    },
    newJob : {
      set : function( value ){
        this.job = value;
      }
    }
  });

  return character;
};

var yossarian = makeCharacter('John', 'Yossarian', 'Pilot');
var chief     = makeCharacter('Chief', 'White Halfoat', 'Drunk');

debug( yossarian.fullName );
debug( chief.fullName );
debug( yossarian.getJob );
yossarian.newJob = 'AWOL';
debug( yossarian.getJob );

var keys = Object.keys(yossarian);

debug(typeof keys);
debug(typeof keys[0]);

for( var prop in yossarian ){
  debug( prop );
}
