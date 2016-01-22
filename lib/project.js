Projects = new Mongo.Collection('projects');

Project = function() {
  this.name = "";
  this.description = "";
  this.iconUrl = "";
  this.appUrl = "";
};

Project.constructor = Project;

Meteor.startup(function() {
    // seed data
  if (Meteor.isServer) {
    Projects.remove({});

    var musixim = new Project();
    musixim.name = "Musixim";
    musixim.iconUrl = "/img/musiximlogo.png";
    musixim.description =
    "<h3>Musixim</h3> <br/>" +
    "<h4> Summary </h4>" +
    "<p> Musixim is an application to discover and listen to new music backed by the spotify web api.</p> <br/>" +
    "<h4> Technologies </h4>" +
    "<p> The web application was written with Meteor and Material Design. </p>" +
    "<p> Other technologies used with this application are MongoDB, Less, JQuery, consumption of a RESTful api, and Git. </p>";

    musixim.appUrl = "http://musixim.com";
    Projects.insert(musixim);

    var giftsForXyz = new Project();
    giftsForXyz.name = "Gifts For Xyz";
    giftsForXyz.iconUrl = "/img/giftslogo.png";
    giftsForXyz.description =
    "<h3>Gifts For Xyz</h3> <br/>" +
    "<h4> Summary </h4>" +
    "<p> Gifts for Xyz is an application to recommend gift ideas based on recommendations and data from popular retailers.</p> <br/>" +
    "<h4> Technologies </h4>" +
    "<p> The web application was written with Meteor, Bootstrap, and Material Design. </p>" +
    "<p> Other technologies used with this application are Bower, MongoDB, Less, JQuery, and Git. </p>" +
    "<p> The collection of gifts that were data scrapped and classifed were retrieved by a web crawler written in Node.JS </p>";

    giftsForXyz.appUrl = "http://giftsfor.xyz";
    Projects.insert(giftsForXyz);

    var blueEagle = new Project();
    blueEagle.name = "Blue Eagle";
    blueEagle.description =
    "<h3'>Blue Eagle</h3> <br/>" +
    "<h4> Summary </h4>" +
    "<p> Blue Eagle is an HTML5 multiplayer shoot 'em up game. This application was a fun project a co-worker and I developed.</p> <br/>" +
    "<h4> Technologies </h4>" +
    "<p> The application was written with HTML5, Node.JS, and Socket.IO</p>" +
    "<p> When handling the multiplayer data, we were able to compress the data based that was passed through the web sockets, to allow great gameplay across any network. " +
    "With users pings averaging at around 15ms. </p>" +
    "<p> Other technologies used were MongoDB, Express and Mongoose.</p>";
    blueEagle.iconUrl = "/img/blueeaglelogo.png";
    blueEagle.appUrl = "http://blueeagle.space";
    Projects.insert(blueEagle);
  }

});
