if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      'use strict'; // use strict to prevent use of implicit globals.
      var myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function(flag) {
      'use strict'; // Must declare functions at the top level of a function.
      var getValue;

      if (flag) {
        getValue = function() { return 'a'; }
// debugger;
      } else {
        getValue = function() { return 'b'; }
      }
// debugger;
      return getValue();
    },

    parseInt : function(num) {
      'use strict';
      return parseInt(num, 10); // ALWAYS specify the radix parameter.
    },

    identity : function(val1, val2) {
      return val1 === val2; // A function returns undefined if a value was not returned. 
                            // Also, must use === for strict comparison.
    }
  };
});
