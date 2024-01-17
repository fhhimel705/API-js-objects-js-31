const kuddus = {
    name: "kuddus mia",
    money: 12000,
    study: "math",
    subjects: ["calculus", "algebra"],
    exam: function () {
      return `${this.name} is giving exam`
    },
    improveExam: function (subject) {
      this.exam();
      return `${this.name} is taking retake on ${subject}`
    },
    treat: function(amount,tips){
      this.money = this.money - (tips + amount);
      return this.money;
    }
  };
  
  
  const result = kuddus.exam();
  const badamAli = {
    name : 'rohim ali',
    money : 5000
  }

  const result02 = kuddus.exam.call(badamAli)
//   console.log(result02);
const badaMoney = kuddus.treat.call(badamAli, 500, 100);
// console.log(badaMoney);
const badaMoney02 = kuddus.treat.apply(badamAli, [500 , 100]);
// console.log(badaMoney02);
const badaMoney03 = kuddus.treat.bind(badamAli);
const remaining = badaMoney03(500 , 100);
console.log(remaining);
