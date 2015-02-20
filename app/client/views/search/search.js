if (Meteor.isClient) {

  Template.search.helpers({
    searchResults : function(){
      //var data = Session.get("searchResponseData");

      return TmpSearch.find({});
    }
  });

  Template.search.events({
    'submit .searchForm' : function(event) {
        event.preventDefault();
        var view = event.target;
        var queryString = view.videoSearch.value;
        search(queryString);

        return false;
    }
  });

  search = function(queryString){
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: queryString
    });
    
    request.execute(onSearchResponse);
  }
  // Called automatically with the response of the YouTube API request.
  onSearchResponse = function(response) {
    var responseString = JSON.stringify(response, '', 2);
    var respData = JSON.parse(responseString);
    var data = respData.items;
    // var key;
    // var newArr = new Array();
    // for(key in data) {
    //   ///renameProperty(key, 'name');
    //   console.log(key);
    //   newArr['name'] = data[key];
    //   newArr.push(newArr['name']);
    // }
    // console.log(newArr);
    console.log('data',data);
    //tmpSearch.remove({});
    TmpSearch._collection.remove({});
    for (var i = 0; i < data.length; i++){
      console.log(data[i]);
      TmpSearch._collection.insert(data[i]);
    }

    Session.set("searchResponseData",data);
  }

  // Helper function to display JavaScript value on HTML page.
}
