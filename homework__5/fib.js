function fib(num) {
  if (num === 0) return 0;
  if (num <= 2) return 1;

  return fib(num - 2) + fib(num - 1);
}

console.log(fib(7)) // 13;
console.log(fib(2)) //) 1;
console.log(fib(22)) // 17711;

//5. Given an index (number), return the corresponding number in fibonacci sequence.