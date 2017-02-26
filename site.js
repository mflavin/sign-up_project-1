$.noConflict();

jQuery(function($) {
  $('#email').on('focus', function() {
    $('#input-email label').addClass('active');
    if( $('#name').val().length === 0 ) {
      $('#input-name label').removeClass('active');
    }
    if( $('#date').val().length === 0 ) {
      $('#input-date label').removeClass('active');
    }
  });
  $('#name').on('focus', function() {
    $('#input-name label').addClass('active');
    if( $('#email').val().length === 0 ) {
      $('#input-email label').removeClass('active');
    }
    if( $('#date').val().length === 0 ) {
      $('#input-date label').removeClass('active');
    }
  });  
  $('#date').on('focus', function() {
    $('#input-date label').addClass('active');
    if( $('#email').val().length === 0 ) {
      $('#input-email label').removeClass('active');
    }
    if( $('#name').val().length === 0 ) {
      $('#input-name label').removeClass('active');
    }
  });
});