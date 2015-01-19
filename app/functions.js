if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function (str2) {
            return str + ", " + str2;
        }
    },

    makeClosures : function(arr, fn) {
        // Pass an array into a function that maps 
        
            // var square = function(arg) {
            //     return function () { 
            //         return fn(arg); 
            //     };
            // };

            // return arr.map(function(element) {
            //     return function () {
            //         fn(element)
            //     }
            // })

            // var x = arr.map(function(element) {
            //     return function() {
            //         // debugger;
            //         return fn(element);
            //     }
            // })

            // return x;

        return arr.map(function(element) {
            return function() {
                return fn(element);
            }
        })

    },

    partial : function(fn, str1, str2) {
        return function (x) {
            return fn(str1, str2, x)
        }
    },

    useArguments : function() {
        var sum = 0;

        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i]
        }
        return sum;
    },

    callIt : function(fn) {

        // Two different solutions shown below. The first w/ apply. The second w/ call.
            // var argsTest = Array.prototype.slice.apply(arguments, [])
            // var emptyArray = [];

            // for (var i = 0; i<argsTest.length; i++) {
            //     if (typeof argsTest[i] !== "function") {
            //         emptyArray.push(argsTest[i])
            //     }
            // }

            // fn.apply(this, emptyArray)


        var args = Array.prototype.slice.call(arguments, 1, arguments.length)
        
        fn.apply(this, args)
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length)

        
    },

    curryIt : function(fn) {

    }
  };
});
