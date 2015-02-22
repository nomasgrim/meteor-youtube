## Meteor Youtube Experience
using meteor to create a customizable youtube experience

* [Meteor](http://docs.meteor.com/#/basic/)
* [YouTube Data Api v3](https://developers.google.com/youtube/v3/)
* [YouTube iframe Api](https://developers.google.com/youtube/iframe_api_reference)
* [Jade](http://jade-lang.com/reference/)
* [Sass](http://sass-lang.com/guide)

## To run locally
From command line
> $ curl https://install.meteor.com/ | sh

Go to dir /app

From command line
> $ meteor

App will say there's errors. Stop meteor. (control + c on mac while in terminal still)
Run meteor again
> $ meteor

## Important Note - Reason for error (Bourbon)
Because Meteor will attempt to compile you app's local stylesheets prior to copying the server assets directory, the first time you run the app after installing the package your app will complain that it is unable to find it. For the moment this can be resolved by either stopping and restarting the app, at which point you should no longer get this error message, our running touch on you local stylesheet thats attempting to access the package, triggering a reload.

Again, you shouldn't have this error after your first time. Remember, run meteor, stop meteor, run meteor again.

## Packages included
* autopublish      1.0.2  Publish the entire database to all clients
* insecure         1.0.2  Allow all database writes by default
* meteor-platform  1.2.1  Include a standard set of Meteor packages in your app
* mquandalle:jade  0.4.1  Jade template language
* fourseven:scss   2.0.0_1  Style with attitude. Sass and SCSS support for Meteor.js (with autoprefixer and sourcemaps).
* wolves:bourbon   1.0.0  Meteor 0.9.3+ - Bourbon is a simple and lightweight mixin library for Sass.


## Contributer's welcome
A [trello board](https://trello.com/b/0MHx1YAB/meteor-youtube) is being used to list out all the ideal features and tasks for the development of this project.

[VIEW PROJECT](http://meteor-youtube.meteor.com)

### [cliff.barendsen@gmail.com](mailto:cliff.barendsen@gmail.com)