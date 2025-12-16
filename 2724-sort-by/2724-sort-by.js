/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    let newArr=arr.slice()
    newArr.sort((a,b)=>fn(a)-fn(b))
    return newArr
};