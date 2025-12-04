const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0 || Math.floor(int1) !== int1 || Math.floor(int2) !== int2) return 'ERROR';
    let sum = 0;
    for (let i = Math.min(int1, int2); i <= Math.max(int1, int2); i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
