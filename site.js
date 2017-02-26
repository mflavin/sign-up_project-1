$.noConflict();

jQuery(function($) {
  $('#email').on('focus', function() {
    $('#input-email label').addClass('active');
    $('#input-name label').removeClass('active');
    $('#input-date label').removeClass('active');
  });
  $('#name').on('focus', function() {
    $('#input-name label').addClass('active');
    $('#input-email label').removeClass('active');
    $('#input-date label').removeClass('active');
  });  
  $('#date').on('focus', function() {
    $('#input-date label').addClass('active');
    $('#input-email label').removeClass('active');
    $('#input-name label').removeClass('active');
  });
});