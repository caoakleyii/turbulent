Template.layout.onRendered(function() {
    $('.project-app-frame').draggable();
    $('.project-app-frame').dblclick(function(){
      maximizeFrame();
    });

    $('nav .project-icon').on('click', function(){
      $('.project-app-frame').show();
      $('.opened-app-tray').addClass('open-app');
    });
});

Template.layout.events({
  'click .app-close' : function(event) {
    $('.project-app-frame').hide();
    $('nav .project-icon').hide();
  },
  'click .maximize' : function (event) {
    maximizeFrame();
  },
  'click .minimize' : function (event) {
    $('.project-app-frame').fadeOut();
    $('.opened-app-tray').removeClass('open-app');
  }
});

function maximizeFrame(){
  $('.project-app-frame').toggleClass('maximize-frame');
  $('.project-app').toggleClass('maximize-app');

  fixIframeHeight();
}

function fixIframeHeight(){
  var height = $('.project-app-frame').css('height');
  $('.project-app').css('height', height);
}
