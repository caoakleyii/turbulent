Template.project.onRendered(function() {
  $('.project').draggable();
});

Template.project.events({
  'click .app': function() {
    $('.project-app').attr('src', this.appUrl);
    $('.project-app-frame').show();
  },
  'click .app-mobile': function(){
    
  }
})
