// Assignment 1 (Fibonacci Sequence):

// Non-Recursive Version:

function fibonacci(num) {
  if (num < 0 || num === 0) {
    return "OOPS";
  }

  let prevNum = 0;
  let sum = 1;
  for (let i = 0; i < num; i++) {
    const temp = sum;
    sum = prevNum + sum;
    prevNum = temp;
  }
  return sum;
}

// Recursive Version:
function recursiveFibonacci(num, sequence = [0, 1]) {
  if (sequence.length >= num) {
    return sequence.slice(0, num);
  }

  const newNumber = sequence.at(-1) + sequence.at(-2);
  sequence.push(newNumber);
  return recursiveFibonacci(num, sequence);
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(8));

// Recursive Version #2:
function fibRecursive(n) {
  if (n < 2) {
    return n;
  } else {
    return (fibRecursive(n - 1) + fibRecursive(n - 2));
  }
}

console.log(fibRecursive(1));
console.log(fibRecursive(2));
console.log(fibRecursive(8));