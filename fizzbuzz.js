let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

function FizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz';
    } else if (n % 3 === 0) {
        return 'Fizz';
    } else if (n % 5 === 0) {
        return 'Buzz';
    } else {
        return n;
    }
}

let idx = 1;

while(idx <= answer) {
    console.log(FizzBuzz(idx));
    idx++;
}