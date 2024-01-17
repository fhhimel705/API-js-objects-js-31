//1. create objects using obj literals
const player = {};
player.name = 'skaib';
player.speciality = 'batsman';
player.bat = function(){
    console.log('swing yout bat');
}
// console.log(player);
// player.bat();

const student = {
name: 'jamal',
job : 'tuiton',
ball: function(){
    console.log('trow the ball');
},
salary : 5000,
}
// student.ball();

//2. object constructor
const person = new Object();
console.log(person);

// 3. object create method
const item = Object.create(null);
// console.log(item);
const topper = Object.create(student);
// console.log(topper.friend);

// 4. class
class Person{
    name = 'abdul';
    adress = 'sirajGanj';
    constructor(age){
        this.age = age;
    }
}
const person1 = new Person(56);
// console.log(person1);

// 5. Funtion
function Car(model , price){
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon' , 32);
// console.log(tesla);