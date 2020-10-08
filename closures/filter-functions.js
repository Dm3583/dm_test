function inBetween(a, b) {

    return function (el) { return el >= a && el <= b }
}


function inArray(arr) {
    return function (el) {
        for (let i = 0; i < arr.length; i++) {
            if (el === arr[i]) {
                return el;
            }
        }

    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(arr.filter(inBetween(3, 6)));
console.log([1, 2, 5, 8].filter(inArray([1, 5])))
console.log(arr.filter(a => a > 3 && a <= 7));