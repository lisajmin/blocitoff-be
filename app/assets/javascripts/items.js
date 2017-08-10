$(document).ready(function() {
  $(document).on('mouseenter', '.glyphicon', function(){
      $(this).removeClass('glyphicon-unchecked');
      $(this).addClass('glyphicon-check');
  });

  $(document).on('mouseleave', '.glyphicon', function(){
      $(this).removeClass('glyphicon-check');
      $(this).addClass('glyphicon-unchecked');
  });
});
