'use strict';
/* global $:false */

var oojs = (function( oojs ){

  var createItem = function( options ){

    var el = '';

    // Need to create a new item element
    if( typeof options.html !== 'object' ){

      el = $('<button>')
        .attr('type', 'button')
        .addClass('btn btn-default tool-bar-item')
        .html( ( options.text ) ? options.text : 'I am a tool' );

    } else {

      el = options.html;

    }

    var item = {
      toggleActivate : function(){
        this.activated = !this.activated;
      }
    };

    Object.defineProperties( item, {
      el : {
        value : el
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

    return item;
  };

  var createToolBarItems = function( toolbarItems ){

    var items = [];

    toolbarItems.each(function(){
      var item = createItem( { html : $(this) } );
      items.push( item );
    });

    return items;
  };

  oojs.createToolBar = function( elementId ){

    var toolbarEl = $( elementId );

    //Create Toolbar cause it don't exist
    if( toolbarEl.length === 0){
      toolbarEl = $('<div>')
        .addClass( 'btn-group-lg' )
        .attr( 'id', elementId.split('#')[1] );
    }

    //Get all items if toolbar got some
    var toolbarItems = toolbarEl.children('.tool-bar-item');

    var toolbar = {

      //Appends toolbar to the DOM
      appendTo : function( domSpot ){
        this.el.appendTo( domSpot );
      },
      // Adds another toolbar item
      addItem : function( options ){

        var item = createItem( options );
        this.el.append( item.el );
        this.items.push( item );

      },
      // Removes a toolbar item
      removeItem : function( index ){

        if( index > this.items.length || index < 0 ){
          throw new Error('What kinda index is that?');
        }

        var item = this.items[ index ];
        this.items.splice( index, 1 );
        item.el.remove();

        item = null;
      }
    };

    Object.defineProperties( toolbar, {

      el : {
        value: toolbarEl
      },
      items : {
        value : createToolBarItems( toolbarItems ),
        enumerable : true
      }
    });

    return toolbar;
  };
  return oojs;
}( oojs || {} ) );