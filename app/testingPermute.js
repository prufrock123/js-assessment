var arr = [1,2,3,4];
var len = arr.length-1;
var answer = []

var obj = {};

var swapContig = function (cur, prev) {
	var temp = prev;
	prev = cur;
	cur = temp;
}

var recurFunc = function(array) {
	for (var i = len; i >= 0; i--) {
		debugger;
	    if (!obj[array.join()]) {
	        obj[array.join()] = array
	        answer.push(array);
	        swapContig(array[i], array[i-1])
	        recurFunc(array);
	    } else {
	    	return;
	    }
	}
}

recurFunc(arr);
