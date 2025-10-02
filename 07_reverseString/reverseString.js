const reverseString = function(s) {
    let length = s.length - 1;
    var reverse = '';

    while (length >= 0){
        console.log(length);
        reverse += s[length];
        length--;
    }
    
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
