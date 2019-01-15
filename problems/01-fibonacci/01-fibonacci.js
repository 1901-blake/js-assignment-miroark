/* 1. Fibonacci
Define function: fib(n)
Return the nth number in the fibonacci sequence. */
function fib(n) {
  //Dynamically programmed to avoid a large stack incurred by recursion.
  let f = [0, 1];

  for (let i = 2; i <= n; i++){
    f.push(f[0] + f[1]);
    f.shift();
  }

  return f[1];
}

console.log(
  `
  N: 1 => ${fib(1)}
  N: 2 => ${fib(2)}
  N: 3 => ${fib(3)}
  N: 4 => ${fib(4)}
  N: 5 => ${fib(5)}
  .
  .
  .
  N:49 => ${fib(49)}
  N:50 => ${fib(50)}
  N:51 => ${fib(51)}
  .
  .
  .
  N:98 => ${fib(98)}
  N:99 => ${fib(99)}
  N: 100 => ${fib(100)}
  `
);
