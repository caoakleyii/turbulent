Projects = new Mongo.Collection('projects');

Project = function() {
  this.name = "";
  this.description = "";
  this.iconUrl = "";
};

Project.constructor = Project;

Meteor.startup(function() {
    // seed data
  if (Meteor.isServer && Projects.find().count() === 0) {
    var giftsForXyz = new Project();
    giftsForXyz.name = "Gifts For Xyz";
    giftsForXyz.iconUrl = "/img/giftslogo.png";
    giftsForXyz.description =
    "<h3>Gifts For Xyz</h3> <br/>" +
    "<h4> Summary </h4>" +
    "<p> Gifts for Xyz is an application to recommend gift ideas based on recommendations and data from popular retailers.</p> <br/>" +
    "<h4> Technologies </h4>" +
    "<p> The web application was written with Meteor, Bootstrap, and Material Design. </p>" +
    "<p> Other technologies used with this application are Bower, Less, JQuery, and Git. </p>" +
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
