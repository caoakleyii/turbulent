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


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-73358703-1', 'auto');
ga('send', 'pageview');
