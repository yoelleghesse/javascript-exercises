const palindromes = function (str) {
    const strS = str.replace(/[^\p{L}]/gu, "").toLowerCase();
    const r_str = strS.split("").reverse().join("");

    if (strS === r_str) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
