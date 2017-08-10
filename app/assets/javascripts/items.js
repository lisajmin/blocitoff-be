
$("document").ready(function() {
  $(".glyphicon-unchecked").hover(function(){
      $(this).removeClass('glyphicon-unchecked');
      $(this).addClass('glyphicon-check');
    }, function() {
      $(this).removeClass('glyphicon-check');
      $(this).addClass('glyphicon-unchecked');
  });
});
