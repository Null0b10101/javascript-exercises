


const removeFromArray = function(arr, ...remove) {
    for ( let i in remove) {
            arr = arr.filter((value) =>  value !== remove[i]);
        }
    return arr;
    }
    


// Do not edit below this line
module.exports = removeFromArray;

// console.log(removeFromArray([1,2,3,4],3));