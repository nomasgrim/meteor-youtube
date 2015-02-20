// Called automatically when JavaScript client library is loaded.
Template.onClientLoad = function(){
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyBebqSFQ69W1pvmDyxh0RfNNBMtkBEZRO4');

}