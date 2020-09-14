//input: [1, 5, 2, 1] -> output: [1, 2, 5]
//input: [4, 2, 2, 3, 2, 2, 2] -> output: [2, 3, 4]
var uniqSort = function (arr) {
    var cache = {};
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!cache[arr[i]]) {
            result.push(arr[i]);
            cache[arr[i]] = true;
        }
    }
    return result.sort(function (a, b) { return a - b; });
};
console.log(uniqSort([4, 2, 2, 3, 2, 2, 2]));
// ---------------------------------------------------------------
var cache = {};
var memoTimes10 = function (input) {
    if (input in cache) {
        return cache[input];
    }
    else {
        cache[input] = input * 10;
        return input * 10;
    }
};
