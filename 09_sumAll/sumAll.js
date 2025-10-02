const sumAll = function(start, end) {
    let sum = 0;
    if (    typeof(start) === 'number' && 
            typeof(end) === 'number' &&
            Number.isInteger(start) && 
            Number.isInteger(end) &&
            start >= 0 && end >= 0
            ) {
                if(start < end){
                    while(start !== end+1){
                        sum += start;
                        start++;
                    } 
                } else if (start > end) {
                    while(start+1 !== end){
                        sum += start;
                        start--;
                    } 
                }
                return sum;
            } else {
                return "ERROR"
            }
}

// Do not edit below this line
module.exports = sumAll;
