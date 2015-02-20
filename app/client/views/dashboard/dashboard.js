if (Meteor.isClient) {
  // This code only runs on the client
  Template.dashboard.helpers({
    tasks: [
      { text: "This is task 1" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ]
  });

  Template.dashboard.events({
    'click .video-pod' : function(event) {
        var view = event.target;
        console.log(this.text);
        //Template.onClientLoad();
        search();
        return false;
    }
  });

}