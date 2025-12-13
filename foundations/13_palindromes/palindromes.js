const palindromes = function (str) {
    str = str.toLowerCase();
    
    let strArr = str.split('');
    strArr = strArr.filter(char => 'abcdefghijklmnopqrstuvexyz1234567890'.includes(char));
    let start = 0;
    let end = strArr.length - 1; 
    while (start < end) {
        if (strArr[start] !== strArr[end]) return false;
        start += 1;
        end -= 1;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
