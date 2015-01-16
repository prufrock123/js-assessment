if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['jquery'], function($) {
    return {
        async: function(value) {

            var deferredObject = $.Deferred();


            /**
             * Below:
             * Silly error, made me LOL, so I kept it.
             * I'm telling the done function to resolve
             * the promise object, but this only occurs
             * once the promise object resolves.
             * If I could get the promise object to resolve,
             * I'd have an endless recursive loop.
             *
             * Meh.
             */

            // deferredObject.done(function(value){
            // 	setTimeout(function() {
            // 		deferredObject.resolve(value)
            // 	}, 3000);
            // })


            /**
             * The function below is causing a strange
             * situation in the tests. Two async tests fail,
             * but it says a third test for "you should be able to receive
             * data...etc." passes.
             *
             * Not sure why this is. Time interval too long?
             * Yes. did some research and the default timeout for Mocha is 2 seconds.
             */

            // setTimeout(function() {
            //     deferredObject.resolve(value);
            // }, 3000);
             
            setTimeout(function() {
                deferredObject.resolve(value);
            }, 1000); 

            return deferredObject.promise();
        },

        manipulateRemoteData: function(url) {
        	/**
        	 * Not sure why, but my code is passing the 2 tests, but creating a failed 3rd test. Timing?
        	 */
            deferredObject = $.Deferred();
            var peopleArray = [];

            $.getJSON(url).then(function(data) {
            	data['people'].forEach(function (element) {
            		peopleArray.push(element.name);
            	});
            	deferredObject.resolve(peopleArray.sort());
            });

            return deferredObject.promise();
        }
    };
});
