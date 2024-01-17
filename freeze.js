const bottle = {
    color: 'yellow',
    price : 50,
    isCeaned : true,
    capacity : 1
};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const pair = Object.entries(bottle);
// console.log(pair);

// const twoDimension = [
//     ['coloe' , 'yellow'],
//     ['price' , 50],
//     ['isCleaned' , true]
// ];
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isCeaned;
bottle.price = 500;
bottle.height = 12;
console.log(bottle);