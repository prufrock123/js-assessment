if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function() {
    return {
        count: function(start, end) {
            /**
             * So this has developed into quite a challenge. I know there is 
             * a way to solve this using setTimeout, but at this point I really
             * REALLY want to understand all the ways this is failing.
             *
             * Please see the attached screenshots for explanation of my process.
             *
             * screenshot 1: Counted too far. Strange.
             *
             * screenshot 2: Noticed the test caused code to run twice.
             *
             * screenshot 3: Noticed counter is undefined even tho..
             *
             * screenshot 4: answers.count(1, 5) is defined.
             */
	            // debugger;

	            // function logger (iteration) {
	            // 	console.log(iteration);
	            // 	iteration++;
	            // }

	            // function stopper (intID) {
	            // 	clearInterval(intID);
	            // }

	            // var ticker = setInterval(function() {
	            // 	if (i <= end) {
	            // 		logger(i);
	            // 	} else {
	            // 		stopper(ticker);
	            // 	}
	            // }, 100);

	        var i = start;
            // var cancel = function() {
            // 	clearInterval(ticker);
            // }


            var testingSomething = function() {
            	 if (i <= end) {
                    console.log(i);
                    i++;
                } else {
                    clearInterval(ticker);
                }
            }

            var ticker = setInterval(testingSomething, 90);

            // var ticker = setInterval(function() {
            //     if (i <= end) {
            //         console.dir(i);
            //         i++;
            //     } else {
            //         clearInterval(ticker)
            //     }
            // }, 100);

            return {
            	cancel: function(){
            		clearInterval(ticker);
            	}
            }

        }
    };
});
