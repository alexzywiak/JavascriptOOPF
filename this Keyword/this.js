
var vice = 'Ladies';

var globalAddiction = function(){
    return 'I need more ' + this.vice;
  };

var booze = {
    vice : 'Booze',
    addiction: globalAddiction
  };
debug(globalAddiction()); // I need more Ladies;
debug(booze.addiction()); // I need more booze.

var reason = ' because you kicked them.';

var makeRequest = function( url, callback ){
  var data = 'My ballz hurt';

  callback( data );
};

var requestObject = {
  reason : ' because they are ballz',
  loadData : function(data){
    var response = data + this.reason;
    debug( response );
  },
  prepareRequest : function(){
    var url = 'http://fakestreet.com';
    makeRequest( url, this.loadData.bind(this) );
  }
};

requestObject.prepareRequest();