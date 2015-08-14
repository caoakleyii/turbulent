Template.project.onRendered(function() {
  $('.project').draggable();

  $(window).resize(function(){
    fixIframeHeight();
  });

  // $('.about-this-project').popover({
  //   html : true
  // });
});

Template.project.events({
  'click .app': function() {
    $(window).trigger('app-open', $(event.target).parent());
    addContentToFrame(this);
    addIconToTray(this);
    showApplication(this);
    fixIframeHeight();
    return true;
  }
});


function addContentToFrame(app) {
  $('.app-title').html(app.name + " - " +  app.appUrl);
  // $('.about-this-project').attr('data-content', app.description);
}

function addIconToTray(app) {
  $('.opened-app-tray').addClass('open-app');
  $('nav .project-icon').attr('src', app.iconUrl);
  $('nav .project-icon').show();
}

function showApplication(app){
  $('.project-app').attr('src', app.appUrl);
  $('.project-app-frame').fadeIn();
}

function fixIframeHeight(){
  var height = $('.project-app-frame').css('height');
  $('.project-app').css('height', height);
}

// because trigger:focus sucks for pop over
$(window).on('click', function(e) {
  if (typeof $(e.target).data('original-title') == 'undefined') {
    $('[data-original-title]').popover('hide');
  }
});
