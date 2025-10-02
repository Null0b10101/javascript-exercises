const palindromes = function (text) {

    let filtered = text.split("").filter((t) =>
        t.match(/[A-Za-z0-9]/)).join("").trim().toLowerCase();

    let reversed = filtered.split("").reverse().join("").toLowerCase();
    // console.log(filtered);
    // console.log(reversed);
    return reversed === filtered;
};

// palindromes('r3ace3car')

// Do not edit below this line
module.exports = palindromes;
