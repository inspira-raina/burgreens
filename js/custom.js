(function($) {
  "use strict"; // Start of use strict

  $('.toggle-password').click(function() {
      // $(this).toggleClass('fa-eye fa-eye-slash');
      var input = $($(this).siblings());
      if (input.attr('type') == 'password') {
          input.attr('type', 'text');
      } else {
          input.attr('type', 'password');
      }
  });

})(jQuery); // End of use strict
