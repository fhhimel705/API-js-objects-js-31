const numbers = [12, 54, 65, 3, 25];
// for(const number of numbers){
//     console.log(number);
// }

const bottle = {
    color: 'yellow',
    price : 50,
    isCeaned : true,
    capacity : 1
};

// for of cant be used in objects
const keys = Object.keys(bottle);
for(const key of keys){
    // console.log(key , bottle[key]);
}
// console.log(keys);

// for in loop
for(const key in bottle){
    // console.log(key , bottle[key]);
}

// advance
const pair = Object.entries(bottle);
console.log(pair);
for(const [key , value] of Object.entries(bottle)){
    console.log(key , value);
}