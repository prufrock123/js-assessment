if (typeof define !== 'function') { var define = require('amdefine')(module); }

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
    	
    	var fileFinder = function(dumData){
    		// debugger;
	    	for (var key in dumData) {
	    		if (key === "dir") {
	    			dir = dumData[key]
	    			dirNames.push(dir)
	    		} else if (key === "files") {
	    			var subDir = [];
	    			var x = dumData[key]
	    			x.forEach(function(element){
	    				subDir.push(element)
	    			})
	    			xTesting(subDir);
	    		} 
	    	}
    	}
    	
		var dirNameFinder = function (xTestData, xTestDirName) {
			// debugger;
			if (xTestData instanceof Array) {
				xTestData.forEach(function(element){
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

    }
  };
});
