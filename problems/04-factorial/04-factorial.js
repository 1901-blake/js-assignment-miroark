/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  if (sumNum === 1 || sumNum === 0){
    return 1;
  }
  sumNum = sumNum * factorial(sumNum-1);
  return sumNum;
}

console.log(`
  N:1 => ${factorial(1)}
  N:2 => ${factorial(2)}
  N:3 => ${factorial(3)}
  N:4 => ${factorial(4)}
  N:5 => ${factorial(5)}
  N:6 => ${factorial(6)}
  N:7 => ${factorial(7)}
  N:8 => ${factorial(8)}
  N:9 => ${factorial(9)}
  N:10 => ${factorial(10)}
  `
);
