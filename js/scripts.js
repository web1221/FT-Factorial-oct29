var counter = function(number) {
  for(var i = 0; i < number.length; i++){
    var total = i *= number[i];
  }
  return total;
}

$(document).ready(function(){
  $('form#factorialForm').submit(function(){
    event.preventDefault();
    var factorialInput = parseInt($('input#factorialInput').val());
    var finalFactorialArray = []

    for(var i = factorialInput; i > 0; i--){
      var test = i * [i]-1
      console.log("Test: ", test);
      console.log("i: ", i);
      finalFactorialArray.push(i);
    }
    $('#results').append(counter(finalFactorialArray));
    console.log(finalFactorialArray);
  });
});
