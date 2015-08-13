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
    giftsForXyz.description = "Some sort of description of what gifts is.";
    giftsForXyz.iconUrl = "/img/giftslogo.png";
    giftsForXyz.appUrl = "http://giftsforxyz.meteor.com";
    Projects.insert(giftsForXyz);

    var blueEagle = new Project();
    blueEagle.name = "Blue Eagle";
    blueEagle.description = "some more stuff about blueeagle";
    blueEagle.iconUrl = "/img/blueeaglelogo.png";
    blueEagle.appUrl = "http://blueeagle.space";
    Projects.insert(blueEagle);
  }

});
