const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    returnString = '';
    while (num > 0) {
        returnString += string;
        num--;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
