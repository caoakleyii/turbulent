Template.side_bar.onRendered(function(){
  var routeName = Router.current().route.getName();
  $( '.' + routeName).addClass('selected');

  $('.menu-drawer').on('click', function() {
    $('.mobile-drawer').slideToggle();
  });
  $('.mobile-drawer a').on('click', function() {
    $('.mobile-drawer').slideUp();
  });
});
Template.side_bar.events({
  'click li.side-bar-item' : function(){

    if ($(event.target).is('a')){
      $('.side-bar-item').removeClass('selected');
      $(event.target.parentElement).addClass('selected');
    }
  },
  'click .logo' : function(){
    $('.side-bar-item').removeClass('selected');
    $('.logo').addClass('selected');
  }
});
