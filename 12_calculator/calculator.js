const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(nrs) {
  let total = 0;

	for(let nr in nrs){
    total += nrs[nr];
  }
  return total;
};

const multiply = function(nrs) {
  let total = 1;

	for(let nr in nrs){
    total *= nrs[nr];
  }
  return total;
};

const power = function(b, e) {
	return b ** e;
};

const factorial = function(n) {
  total = 1;

	while(n > 0) {
    total *= n;
    n--;
  }
  return total;
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
