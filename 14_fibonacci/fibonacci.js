const fibonacci = function(nr) {
    let f0 = 0;
    let f1 = 1;
    let temp = 0;
    let fn = 1;
    nr = Number(nr);

    if (nr === 0) {
        return 0;
    }

    if (nr < 0) {
        return 'OOPS';
    }

    while(fn < nr){
        fn++;
        temp = f0 + f1;
        f0 = f1;
        f1 = temp;
    }

    return f1;
};

// fibonacci(8);
// Do not edit below this line
module.exports = fibonacci;
