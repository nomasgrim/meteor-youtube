## Search View 
### Objective
User has ability to make a search and return results. 

### Overview
* Markup
* Styles
* Scripts

### Markup
* id's
  * search-container
  * response-container

### Scripts

#### Helpers
* searchResults: returns a collection stored on the client of the current search results

#### Events
* CLICK
  * .search-item
* SUBMIT
  * .searchFrom

#### Controllers
* search
* onSearchResponse - uses a service request

#### Service Requests
* gapi.client.youtube.search.list
  * relies on yt.js that is in client/lib/yt.js


