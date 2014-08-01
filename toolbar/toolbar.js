'use strict';
/* global $:false */

var oojs = (function( oojs ){

  // Toolbaritem Constructor Function
  var ToolbarItem = function( options ){

    var el = '';

    if( typeof options === 'undefined' ){
      options = {};
    }

    if( typeof options.html !== 'object' ){

      el = $('<button>')
        .attr('type', 'button')
        .addClass('btn btn-default tool-bar-item')
        .html( ( options.text ) ? options.text : 'I am a tool' );

    } else {

      el = options.html;

    }

    Object.defineProperty( this, 'el', {
      value : el
    });
  };

  // Toolbar Items methods.
  Object.defineProperties( ToolbarItem.prototype, {
    
    toggleActivate : {
      value : function(){
        this.activated = !this.activated;
      }
    },
    disabled : {
      get : function(){
        return this.el.prop('disabled');
      },
      set : function( value ){
        if( value ){
          this.el.prop('disabled', true);
        } else {
          this.el.prop('disabled', false);
        }
      }
    },
    activated : {
      get : function(){
        return this.el.hasClass('btn-success');
      },
      set : function( value ){
        if( value && !this.el.prop('disabled') ){

          this.el.addClass('btn-success');
        } else {
          this.el.removeClass('btn-success');
        }
      }
    }
  });

  // Toolbar Helper function.  Creates toolbaritem objects for each item passed.
  var createToolBarItems = function( toolbarItems ){

    var items = [];

    toolbarItems.each(function(){
      var item = new ToolbarItem( { html : $(this) } );
      items.push( item );
    });

    return items;
  };

  // Toolbar Constructor function
  var Toolbar = function( elementId ){
    
    var toolbarItems = elementId.children('.tool-bar-item');

    Object.defineProperties( this, {

      el : {
        value: elementId
      },
      items : {
        value : createToolBarItems( toolbarItems ),
        enumerable : true
      }
    });
  };

  // Toolbar Methods
  Object.defineProperties( Toolbar.prototype, {
    
    appendTo : {
      
      value : function( domSpot ){
        this.el.appendTo( domSpot );
      },
      enumerable: true
    },

    addItem : {

      value : function( options ){
        var item = new ToolbarItem( options );
        this.el.append( item.el );
        this.items.push( item );
      },
      enumerable: true
    },

    removeItem : {

      value : function( index ){

        if( index > this.items.length || index < 0 ){
          throw new Error('What kinda index is that?');
        }

        var item = this.items[ index ];
        this.items.splice( index, 1 );
        item.el.remove();

        item = null;
      },
      enumerable: true
    }
  });

  oojs.createToolBar = function( elementId ){

    var toolbarEl = $( elementId );

    //Create Toolbar cause it don't exist
    if( toolbarEl.length === 0){
      toolbarEl = $('<div>')
        .addClass( 'btn-group-lg' )
        .attr( 'id', elementId.split('#')[1] );
    }

    return new Toolbar( toolbarEl );
 
  };

  return oojs;

}( oojs || {} ) );