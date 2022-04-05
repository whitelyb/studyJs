Array.prototype.ybslice = function (start, end) {
    var arr = this;
    start = start || 0;
    end = end || arr.length;
    var newArr = [];
    for (var i = start; i < end; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

var newArr1 = [1, 2, 3].slice(-1); // 后面可以实现一下传负数的情况
console.log(newArr1);

var newArr2 = [1, 2, 3].ybslice(1);
console.log(newArr2);
