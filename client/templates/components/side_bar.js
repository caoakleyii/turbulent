Template.side_bar.onRendered(function(){
  var routeName = Router.current().route.getName();
  $( '.' + routeName).addClass('selected');
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
  },
  'click .side-navbar' : function() {
    $('.mobile-drawer').slideToggle();
  }
})
