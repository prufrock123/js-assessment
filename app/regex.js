if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return /(\d)/g.test(str);

    },

    containsRepeatingLetter : function(str) {
        return /([a-zA-Z]).*?\1/g.test(str)
    },

    endsWithVowel : function(str) {
        return /([aeiouAEIOU])(?!.)/.test(str)
    },

    captureThreeNumbers : function(str) {
        var found = /\d{3}/.exec(str)

        if (found) {
            return found[0] 
        } else {
            return false;
        }
    },

    matchesPattern : function(str) {
        return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(str)
    },
    isUSD : function(str) {
        return /^(\$[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$)/.test(str)
    }
  };
});
