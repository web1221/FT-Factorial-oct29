$(document).ready(function(){
  $('form#factorialForm').submit(function(){
    event.preventDefault();
    var factorialInput = parseInt($('input#factorialInput').val());

    for(var i = factorialInput; i > 0; i--){
      console.log(i);
      var finalFactorial = [];
      finalFactorial = (factorialInput * i);
      console.log(finalFactorial);

    }

  });
});
