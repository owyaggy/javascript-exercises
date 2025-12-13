const fibonacci = function(n) {
   if (n < 0) return "OOPS";
   let sum = 0;
   let a = 0;
   let b = 1;
   for (let i = 0; i < n; i++) {
    sum = a + b;
    b = a;
    a = sum;
   }
   return sum;
};

// Do not edit below this line
module.exports = fibonacci;
