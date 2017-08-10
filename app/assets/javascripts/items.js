
$("document").ready(function() {
  $(".glyphicon-unchecked").on('mouseenter',function(){
      $(this).removeClass('glyphicon-unchecked');
      $(this).addClass('glyphicon-check');
  });

  $(".glyphicon-unchecked").on('mouseleave',function(){
      $(this).removeClass('glyphicon-check');
      $(this).addClass('glyphicon-unchecked');
  });
});
