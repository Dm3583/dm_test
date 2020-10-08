// function outer() {
//     let v = 0;
//     return function () {
//         return ++v
//     }
// }

// let count = outer();

// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())

function simple() {
    let num = 0;
    return function (g = 0) {
        return num += g
    }
}

let s = simple();

let s2 = simple();

console.log(s(200));
console.log(s(400));
console.log(s(600));
console.log(s(800));
console.log(s(1000));

console.log(s2(456));
console.log(s2(45));
