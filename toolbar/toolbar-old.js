'use strict';

var oojs = (function( oojs ){

  var createToolBarItems = function( itemElements ){
    var items = [];

    [].forEach.call( itemElements, function(el, index, array){
      var item = {
        el: el,
        disable : function(){
          this.el.classList.remove('btn-primary');
          this.el.classList.add('btn-default');
        },
        enable : function(){
          this.el.classList.remove('btn-default');
          this.el.classList.add('btn-primary');
        },
        isDisabled : function(){
          return this.el.classList.contains('btn-default');
        },
        activate : function(){
          if( this.isDisabled() ){
            return;
          }
          this.el.classList.add('btn-success');
        },
        deactivate : function(){
          if( this.isDisabled() ){
            return;
          }
          this.el.classList.remove('btn-success');
        },
        isActive : function(){
          return this.el.classList.contains('btn-success');
        },
        toggleActive : function(){
          if( this.isActive() ){
            this.deactivate();
          } else {
            this.activate();
          }
        }
      };

      items.push( item );

    }); //Cheats your way into using the .forEach array method on the node list. call allows you to pass in a list of arguments to the called function.  forEach takes a call back and passes in three arguments, the element, the index, and the array itself.

    return items;
  };

  oojs.createToolBar = function( elementID ){
    console.log('Created Toolbar');
    var element = document.getElementById( elementID ),
        items   = element.querySelectorAll( '.tool-bar-item' );

    return {
      items : createToolBarItems( items )
    };
  };

  return oojs;
}( oojs || {} ));  // Checks to see if there is already an instance of oojs going, if so passes it in, if not it will pass in a new object literal.
