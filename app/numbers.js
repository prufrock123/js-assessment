if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var intermediate = num.toString(2);
        if(intermediate.length < 8){
            for(var i = 8, len = intermediate.length; i > len; i--){
                intermediate = "0" + intermediate;
            }
        }
        // intermediate is now a binary string of length 8
        
        return parseInt(intermediate[8 - bit], 2);
    },

    base10: function(str) {

    },

    convertToBinary: function(num) {
        debugger;
        return (num).toString(2);
    },

    multiply: function(a, b) {

    }
  };
});

