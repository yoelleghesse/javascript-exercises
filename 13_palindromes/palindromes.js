const palindromes = function (str) {
    str.split("").reverse().join("");
    return str.replace(/[^\p{L}]/gu, "");
};

// Do not edit below this line
module.exports = palindromes;
