const removeFromArray = function(arr, ...toRemove) {
    return arr.filter(elem => !(toRemove.includes(elem)));
};

// Do not edit below this line
module.exports = removeFromArray;
