/*globals app */

/** v-- Insert into script.js? --v **/
app.openModal = function(modal) {
  $('#modal').fadeIn(250, function() {
    // $(modal).show();
  });
  $(modal).fadeIn(500);
};

app.closeModal = function(modal) {
  $('#modal').fadeOut(250);
  $(modal).fadeOut(750);
};