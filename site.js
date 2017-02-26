$.noConflict();

jQuery(function($) {
  $('#email').on('focus', function() {
    $('#input-email label').addClass('hide');
    if( $('#name').val().length === 0 ) {
      $('#input-name label').removeClass('hide');
    }
    if( $('#date').val().length === 0 ) {
      $('#input-date label').removeClass('hide');
    }
  });
  $('#name').on('focus', function() {
    $('#input-name label').addClass('hide');
    if( $('#email').val().length === 0 ) {
      $('#input-email label').removeClass('hide');
    }
    if( $('#date').val().length === 0 ) {
      $('#input-date label').removeClass('hide');
    }
  });  
  $('#date').on('focus', function() {
    $('#input-date label').addClass('hide');
    if( $('#email').val().length === 0 ) {
      $('#input-email label').removeClass('hide');
    }
    if( $('#name').val().length === 0 ) {
      $('#input-name label').removeClass('hide');
    }
  });
});