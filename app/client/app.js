TmpSearch = new Mongo.Collection('searchResults');

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.rendered = function() {
   if(!this._rendered) {
      this._rendered = true;
      var tag = document.createElement('script');
      tag.src = "https://apis.google.com/js/client.js";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      Meteor.setTimeout(function(){
        console.log('timeout');
        Template.onClientLoad();
      }, 500);

    }
    
  };

  Template.body.helpers({
    tasks: [
      { text: "This is task 1" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ]
  });

}
