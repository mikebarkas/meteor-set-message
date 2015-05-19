// Meteor Set Message.
// Global variable to display a message in templates.
setMessage = function (message = NULL, type = NULL) {
  if (message) {
    // Conditional check for success, warning, or danger.
    switch  (type) {
      // Define alerts with bootstrap classes.
      case 'success':
      var alert = '<div class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>'
         + message +
        '</div>';
      break;

      case 'warning':
      var alert = '<div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>'
         + message +
        '</div>';
      break;

      case 'danger':
      var alert = '<div class="alert alert-danger alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>'
         + message +
        '</div>';
      break;

      default:
      var alert = undefined;
      break;
    }
    return alert;
  }
}
