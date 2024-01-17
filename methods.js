const student = {
  name: "kuddus mia",
  money: 12000,
  study: "math",
  subjects: ["calculus", "algebra"],
  exam: function () {
    console.log(this.name, "is giving exam");
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
// student.exam();
const retake = student.improveExam('algebra');
// console.log(retake);
const remainingMoney = student.treat(2000);
console.log(remainingMoney);
const remainingMoney02 = student.treat(5000,100);
console.log(remainingMoney);