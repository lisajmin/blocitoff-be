$(document).ready(function() {
  $(document).on('mouseenter', '.task-complete', function(){
      $(this).removeClass('glyphicon-unchecked');
      $(this).addClass('glyphicon-check');
  });
  $(document).on('mouseleave', '.task-complete', function(){
      $(this).removeClass('glyphicon-check');
      $(this).addClass('glyphicon-unchecked');
  });
});
