/**
 * jquery.confirmAction
 *
 * @version 1.2
 *
 * @author Uday kiran
 * @author Uday kiran<udaykiran.vit@gmail.com>
 *
 * @url <https://github.com/udayakiran/jQuery.confirmAction.js>
 */
(function($) {

  /**
   * Confirm Action on any item click.
   * @param options {text,  container, show, confirm, cancel, confirmbyFunction, cancelOnTrue, confirmButton, cancelButton}
   */
  $.fn.confirmAction = function(options) {
    if (typeof options === 'undefined') {
      options = {};
    }

    options.button = $(this);

    this.click(function(e) {
      e.preventDefault();
      $.confirmAction(options, e);
    });

    return this;
  };

  /**
   * Show a confirmation message under the specified container.
   * @param options {text, container, confirm, show, cancel, confirmButton, cancelButton}
   */
  $.confirmAction = function(options, e) {
// Default options
    var settings = $.extend({
      text: "Are you sure?",
      confirmButton: "Yes",
      cancelButton: "No",
      container: null,
      isConfirmationNeeded: function() {
        return true;
      },
      isEnabled: function() {
        return true;
      },
      show: function(o) {
//just do nothing
      },
      confirm: function(o) {
        alert("you confirmed this");
      },
      cancel: function(o) {
        alert("you cancelled this");
      },
      button: null
    }, options);

    var buttons = '<div class="columns"><div class ="column quarter_margin_top blink_dark_link"><a class="cancel-link mild_grey">' + settings.cancelButton + '</a></div>'
            + '<div class ="column"><a class="confirm-link smaller_button custom_red_button", style = "color: white !important;">' + settings.confirmButton + '</a></div></div>';
    var containerHTML = '<div class="row padding_bottom_30 quarter_margin_bottom"><div class="confirmation-message">'
            + '<span class="confirmation-text" style="padding-right:3px">' + settings.text + '</span></div></div>'
            + '<div class="row float_right position_bottom_right"><span class="confirmation-links">' + buttons + '</span>'
            + '</div>';

    settings.container.html(containerHTML);

    settings.container.find(".confirm-link").click(function(e) {
      settings.confirm(settings.button);
    });
    settings.container.find(".cancel-link").click(function(e) {
      settings.cancel(settings.button);
    });

    if (settings.isEnabled()) {
      if (settings.isConfirmationNeeded()) {
        settings.container.show();
        settings.show(settings.button);
      } else {
        settings.confirm(settings.button);
      }
    }
  }

})(jQuery);
