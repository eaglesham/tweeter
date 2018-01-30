$(document).ready(function() {
    $( "#textarea" ).keyup(function(ev) {
        let charAmount = $(this).val().length;
        let newCount = 140 - charAmount;
        $(this).parent().children( ".counter" ).html(newCount);
        if (newCount < 0) {
            $(this).parent().children( ".counter" ).css("color", "Red");
        }
      });
  });