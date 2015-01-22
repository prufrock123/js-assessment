if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function() {
    return {
        listFiles: function(data, dirName) {
            var files = [];

            var dirNames = [];
            var dir;

            var xTesting = function(subDir) {
                subDir.forEach(function(element, index) {
                    // debugger;
                    console.log(typeof element)
                    if (typeof element === 'string') {
                        files.push(element)
                    } else if (element instanceof Object) {
                        fileFinder(element)
                    }
                })
            }

            var fileFinder = function(dumData) {
                // debugger;
                for (var key in dumData) {
                    if (key === "dir") {
                        dir = dumData[key]
                        dirNames.push(dir)
                    } else if (key === "files") {
                        var subDir = [];
                        var x = dumData[key]
                        x.forEach(function(element) {
                            subDir.push(element)
                        })
                        xTesting(subDir);
                    }
                }
            }

            var dirNameFinder = function(xTestData, xTestDirName) {
                // debugger;
                if (xTestData instanceof Array) {
                    xTestData.forEach(function(element) {
                        if (typeof element !== 'string') {
                            dirNameFinder(element, xTestDirName)
                        }
                    })
                } else if (typeof xTestDirName === 'undefined') {
                    fileFinder(xTestData);
                    return files;
                } else {
                    for (var key in data) {
                        if (xTestData[key] === xTestDirName) {
                            fileFinder(xTestData);
                            return files;
                        } else {
                            dirNameFinder(xTestData['files'], xTestDirName)
                            return files;
                        }
                    }
                }
            }

            return dirNameFinder(data, dirName);

        },

        permute: function(arr) {
            // http://stackoverflow.com/a/11509565/54468
                // var temp = [];
                // var answer = [];

                // return doIt(arr);

                // function doIt(a) {
                //   var i, len, item;

                //   for (i = 0, len = arr.length; i < len; i++) {
                //    debugger;
                //     // remove the item at index i
                //     item = arr.splice(i, 1)[0];

                //     // add that item to the array we're building up
                //     temp.push(item);

                //     if (arr.length) {
                //       // if there's still anything left in the array,
                //       // recurse over what's left
                //       doIt(arr);
                //     } else {
                //       // otherwise, log the result and move on
                //       logResult();
                //     }

                //     // restore the item we removed at index i
                //     // and remove it from our temp array
                //     arr.splice(i, 0, item);
                //     temp.pop();
                //   }
                //   // debugger;
                //   return answer;
                // }

                // function logResult() {
                //   answer.push(
                //     // make a copy of temp using .slice()
                //     // so we can continue to work with temp
                //     temp.slice()
                //   );
                // }

                //  var set =[];
                //  function permute (arr, data) {
                //    var current, memo = data || [];

                //    for (var i = 0; i < arr.length; i++) {
                //      debugger;
                //       current = arr.splice(i, 1)[0];
                //       if (arr.length === 0) set.push(memo.concat([current]));
                //       permute(arr.slice(), memo.concat([current]));
                //       arr.splice(i, 0, current);
                //    }
                //    return set;
                // }
                // return permute(arr);

                // var len = arr.length - 1;
                // var answer = []

                // var obj = {};

                // var swapContig = function(curIndex, prevIndex, array) {
                //     var temp = array[prevIndex];
                //     array[prevIndex] = array[curIndex];
                //     array[curIndex] = temp;
                // }

                // var recurFunc = function(array) {
                //   for (var i = len; i >= 0; i--) {
                //     debugger;
                //       if (!obj[array.join()]) {
                //           obj[array.join()] = array
                //           var newArray = array.slice();
                //           answer.push(newArray);
                //           if (i-1 !== -1){
                //             swapContig(i, i-1, array)
                //           }
                //           recurFunc(array);
                //       } else {
                //         if (i-1 !== -1){
                //           swapContig(i, i-1, array)
                //         } else {
                //           return;
                //         }
                //         // return;
                //       }
                //   }
                // }

                // var recurFunc = function(array) {
                //   for (var i = len; i >= 0; i--) {
                //     debugger;
                //       if (!obj[array.join()]) {
                //           obj[array.join()] = array
                //           var newArray = array.slice();
                //           answer.push(newArray);
                //           if (i-1 !== -1){
                //             swapContig(i, i-1, array)
                //           }
                //           var tempArray = array.slice();
                //           recurFunc(tempArray);
                //       } else {
                //         if (i-1 !== -1){
                //           swapContig(i, i-1, array)
                //         } else {
                //           return;
                //         }
                //         // return;
                //       }
                //   }
                // // }

                // var storeIt = function(string, array) {
                //     obj[string] = array.slice();
                //     var newArray = array.slice();
                //     answer.push(newArray)
                // }
            var answer = []
            function builder(assembled, to_go) {
                if(to_go.length == 0) {
                    answer.push(assembled);
                } else {
                    to_go.forEach(function(element, index, array) {
                        var newAssembled = assembled.slice();
                        var newToGo = to_go.slice();
                        newToGo.splice(index, 1);
                        newAssembled.push(element)
                        builder(newAssembled, newToGo);
                    });
                }
            }


            builder([], [1, 2, 3, 4]);

            return answer;
        }
    };
});
