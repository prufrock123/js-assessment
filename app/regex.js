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

    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
