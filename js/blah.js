function fact(x) {
  if (x == 0) {
    console.log(x, 2);
    return 1;
  } else {
    console.log(x, 1);
    return x * fact(x - 1);
  }
}

console.log(fact(factorialInput));
var factorial = 1;
for(var i = factorialInput; i > 0; i--){
  console.log(factorial = factorial * i);
}
