# jQuery.confirmAction.js

This is a jquery plugin that confirms an action on click of an element and executes seperate js code based on the confirmation.

## Usage

1. Download jquery.confirmAction.js OR jquery.confirmAction.min.js

2. Include jQuery file (1.7+) and the plugin file (or .min file) in your HTML page.
```
<script type="text/javascript" src="https://code.jquery.com/jquery-1.7.1.min.js"></script>
<script src="jquery.confirmAction.min.js"></script>
```
3. Example usage - 

Say there is a link/button with id "confirm_link", if you want to display a confirmation message to the user on clicking this link and decide weather to proceede or not -
```
<script type="text/javascript">

     jQuery(document).ready(function () {
        jQuery("#confirm_link").confirmAction({container: jQuery("#<container_id>"),
          text: "<Text that describes the confirmation related info>",
          confirmButton: "<Confirm button label>",
          cancelButton: "<Cancel button label>",
          avoid_confirm_double_click: true,
          cancel: function() {
            //Code to be executed on clicking cancel button.
          },
          confirm: function() {
            //Code to be executed on clicking confirm button.
          }
        });
      });    
      
 </script>
```
## Contributing

Please help with your contribution by filing any issues if found. Pull requests are welcomed :)
