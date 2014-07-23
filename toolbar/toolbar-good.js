'use strict';
/* global $:false */

var oojs = (function( oojs ){

  var createItemObject = function( itemText ){

    var toolbarItem = $('<button>')
      .attr('type', 'button')
      .addClass('btn btn-default tool-bar-item')
      .html( itemText );

    var item = {
      toggleActivate : function(){
        this.activated = !this.activated;
      }
    };

    Object.defineProperties( item, {
      el : {
        value : toolbarItem
      },
      enabled : {
        get : function(){
          return this.el.hasClass('btn-primary');
        },
        set : function( value ){
          if( value ){
            this.el.removeClass('btn-default').addClass('btn-primary');
          } else {
            this.el.removeClass('btn-primary').addClass('btn-default');
          }
        }
      },
      activated : {
        get : function(){
          return this.el.hasClass('btn-success');
        },
        set : function( value ){
          if( value ){
            this.el.addClass('btn-success');
          } else {
            this.el.removeClass('btn-success');
          }
        }
      }
    });

    return item;
  };

  var createToolBarItems = function( toolBarItems ){

    var items = [];

    toolBarItems.each(function(){
      var item = createItemObject( $(this) );
      items.push( item );
    });
    return items;
  };

  var createToolBarElement = function( elementId ){

    var toolbar = $('<div>')
      .attr( 'id', elementId.split('#')[1] ).
      addClass('btn-group-lg');

    return toolbar;
  };


  oojs.createToolBar = function( elementId ){
    
    var toolbarEl = $( elementId );

    if( toolbarEl.length === 0 ){

      toolbarEl = createToolBarElement( elementId );

    }

    var toolbarItems = toolbarEl.children('.tool-bar-item');

    var toolbar = {

      appendTo  : function( domSpot ){
        this.el.appendTo( domSpot );
      },

      addItem : function( itemText ){
        var newItemObj = createItemObject( itemText );

        this.el.append( newItemObj.el );
        this.items.push( newItemObj );
      },

      removeItem : function( index ){
        if( index > this.items.length || index < 0 ){
          throw new Error('That ain\'t no index I ever heard of...');
        }

        var item = this.items[ index ];
        this.items.splice( index, 1);
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
        enumberable : true
      }
    });

    return toolbar;
  };

  return oojs;
}( oojs || {} ) );