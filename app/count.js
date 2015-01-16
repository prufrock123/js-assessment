if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function() {
    return {
        count: function(start, end) {
            /**
             * My error below was that I was using setInterval which messed up 
             * the tests.
             */
            // var i = start;
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

            // var ticker = setInterval(function() {
            // 	// debugger;
            //     if (i <= end) {
            //         console.log(i);
            //         i++;
            //     } else {
            //         clearInterval(ticker)
            //     }
            // }, 100);


        }
    };
});
