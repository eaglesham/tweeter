$(document).ready(function() {
    $( "#textarea" ).keyup(function(ev) {
        let charAmount = $(this).val().length;
        let newCount = 140 - charAmount;
        $(this).parent().children( ".counter" ).html(newCount);
        console.log($(this).next('.counter'))
      });
  });