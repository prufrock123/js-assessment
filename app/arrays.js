if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function() {
    return {
        indexOf: function(arr, item) {
            'use strict';
            // var valueFound 
            // arr.forEach(function(e, i) {
            //     debugger;
            //     if (e === item) {
            //         valueFound = i;
            //     } else {
            //         return
            //     }
            // })

            // return valueFound ? valueFound : -1;
            // 
            // The above method works, but is unnecessarily resource consuming.
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === item) {
                    return i;
                }
            }

            return -1;
        },

        sum: function(arr) {
            'use strict';
            var sumResult = 0

            for (var i = 0; i < arr.length; i++){
                sumResult += arr[i];
            }

            return sumResult;
        },

        remove: function(arr, item) {
            'use strict';
            for (var i=0; i < arr.length; i++){
                if (arr[i] === item){
                    arr.splice(i, 1)
                } 
            }
            return arr;
        },

        removeWithoutCopy: function(arr, item) {
           'use strict';
            for (var i = arr.length-1; i >= 0; i--){
                if (arr[i] === item){
                    arr.splice(i, 1)
                } 
            }
            return arr;
        },

        append: function(arr, item) {
            'use strict';
            arr.push(item);
            return arr;
        },

        truncate: function(arr) {
            'use strict';
            arr.pop();
            return arr;
        },

        prepend: function(arr, item) {
            'use strict';
            arr.unshift(item);
            return arr;
        },

        curtail: function(arr) {
            'use strict';
            arr.shift();
            return arr;
        },

        concat: function(arr1, arr2) {
            'use strict'
            return arr1.concat(arr2)
        },

        insert: function(arr, item, index) {
            'use strict';
            arr.splice(index, 0, item)
            return arr;
        },

        count: function(arr, item) {
            'use strict';
            var counter = 0;

            for (var i = 0; i < arr.length; i++){
                if (arr[i] === item) {
                    counter++;
                }
            }
            return counter;
        },

        duplicates: function(arr) {
            'use strict';
            var duplicateArray = [];

            var seenObject = {};
            for (var i = 0; i < arr.length; i++) {
                !seenObject[arr[i]] ? seenObject[arr[i]] = 1 : seenObject[arr[i]]++
            }

            for (var key in seenObject) {
                if (seenObject[key] > 1) {
                    duplicateArray.push(key)
                } 
            }

            // OR
                
                // This code works without involving objects. I'm guessing the previous 
                // code is more efficient, as this code involves querying up two 3 different
                // arrays completely.
                // var singleArray = [];

                // arr.forEach(function(e){
                //     if (singleArray.indexOf(e) === -1) {
                //         singleArray.push(e)
                //     } else {
                //         if (duplicateArray.indexOf(e) === -1) {
                //             duplicateArray.push(e)
                //         } 
                //     }
                // })

            // OR
            
                // Experimental code that uses some proposed ES7. Not supported by most browswers.
                // arr.forEach(function(e){
                //     debugger;
                //     if (!singleArray.includes(e)) {
                //         singleArray.push(e)
                //     } else {
                //         if (!duplicateArray.includes(e)){
                //             duplicateArray.push(e)
                //         }
                //     }
                // })

            return duplicateArray;
        },

        square: function(arr) {

        },

        findAllOccurrences: function(arr, target) {

        }
    };
});
