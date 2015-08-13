Template.projects.onRendered(function() {
    $('.project-app-frame').draggable();
    $('.project-app-frame').dblclick(function(){
      maximizeFrame();
    })
});

Template.projects.events({
  'click .app-close' : function(event) {
    $('.project-app-frame').hide();
  },
  'click .maximize' : function (event) {
    maximizeFrame();
  }
})

function maximizeFrame(){
  $('.project-app-frame').toggleClass('maximize-frame');
  $('.project-app').toggleClass('maximize-app');
}
