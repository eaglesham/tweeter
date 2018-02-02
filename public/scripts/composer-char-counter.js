//character counter starts at 140, is subtracted by 1 after every 'keyup'. All numbers below 0 (over 140 characters entered) are displayed in red
$(document).ready(function() {
    $( "#textarea" ).keyup(function(ev) {
        let charAmount = $(this).val().length;
        let newCount = 140 - charAmount;
        $(this).parent().children( ".counter" ).html(newCount);
        if (newCount < 0) {
            $(this).parent().children( ".counter" ).css("color", "Red");
        } else {
            $(this).parent().children( ".counter" ).css("color", "Black")
        }
      });
  });