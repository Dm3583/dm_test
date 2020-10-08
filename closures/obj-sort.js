let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}


console.log(users.sort(byField('name')));
users.forEach(user => console.log(user['name']));

console.log(users.sort(byField('age')));
users.forEach(user => console.log(user['name'])); 