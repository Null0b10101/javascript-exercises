const repeatString = function(word, number) {
    var constr = '';
    if (number < 0) {
        return 'ERROR';
    } else {
        while (number != 0) {
            constr += word;
            number--;
        }
        return constr;
    }
};

// Do not edit below this line
module.exports = repeatString;
