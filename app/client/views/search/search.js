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
    },
    'click .search-item' : function(event) {
      event.preventDefault();
      var view = event.target;
      var itemClicked = TmpSearch._collection.findOne(this._id);
      Session.set('currentId',this._id)
      UI.render(Template.video,document.body);
    }
  });

  //angular'ish version of controller
  search = function(queryString){
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: queryString,
        maxResults: 50
    });
    
    request.execute(onSearchResponse);
  }
  // Called automatically with the response of the YouTube API request.
  onSearchResponse = function(response) {
    var responseString = JSON.stringify(response, '', 2);
    var respData = JSON.parse(responseString);
    var data = respData.items;


    TmpSearch._collection.remove({});
    for (var i = 0; i < data.length; i++){
      TmpSearch._collection.insert(data[i]);
    }
    console.log(data);
    Session.set("searchResponseData",data);
  }

  // Helper function to display JavaScript value on HTML page.
}
