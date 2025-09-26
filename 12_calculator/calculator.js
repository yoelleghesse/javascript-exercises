const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let ans = 0;
	for (let i in arr) {
    ans += i;
  }
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
	let ans = 1
  for (let i = n; i > 0; i--) {
    ans *= i;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
