if (Meteor.isClient) {
  Meteor.subscribe('projects');
}
Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  this.render('home');
});

Router.route('/projects', function(){
  var projects = Projects.find({});
  this.render('projects', { data : { projects : projects }});
});
