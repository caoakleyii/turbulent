Template.project.onRendered(function() {
  $('.project').draggable();

  $('.about-this-project').popover({
    html : true
  });
});

Template.project.events({
  'click .app': function() {
    $('.project-app').attr('src', this.appUrl);
    $('.project-app-frame').show();

    $('.about-this-project').attr('data-content', this.description);
  }
});

// because trigger:focus sucks for pop over
$(window).on('click', function(e) {
  if (typeof $(e.target).data('original-title') == 'undefined') {
    $('[data-original-title]').popover('hide');
  }
});
