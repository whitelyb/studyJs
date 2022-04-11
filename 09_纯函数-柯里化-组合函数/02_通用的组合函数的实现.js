function ybCompose(...fns) {
    let length = fns.length;
    for (let i = 0; i < length; i++) {
        if (typeof fns[i] !== 'function') {
            throw new TypeError("Expected arguments are functions")
        }
    }

    return function (...args) {
        let index = 0;
        let result = length ? fns[index].apply(this, args) : args
        while (++index < length) {
            result = fns[index].call(this, result)
        }
        return result
    }
}

function double(m) {
    return m * 2
}

function square(n) {
    return n ** 2
}

function square1(x) {
    return x * 2
}

const newFn = ybCompose(double, square, square1);
console.log(newFn(10));


