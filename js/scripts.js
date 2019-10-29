$(document).ready(function(){
  $('form#factorialForm').submit(function(){
    event.preventDefault();
    var factorialInput = parseInt($('input#factorialInput').val());
    var factorialArray = [];
    for(var i = factorialInput; i > 0; i--){
      console.log((factorialInput) * (factorialInput-1));
    }
  });
});
