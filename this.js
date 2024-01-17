const kuddus = {
  name: "kuddus mia",
  money: 12000,
  study: "math",
  subjects: ["calculus", "algebra"],
  exam: function () {
    return `${this.name} is giving exam`;
  },
  examArrow: () => {
    console.log(this);
  },
  examNested: () => {
    const arrow = () => {
      console.log(this);
    };
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is taking retake on ${subject}`;
  },
  treat: function (amount, tips) {
    this.money = this.money - (tips + amount);
    return this.money;
  },
};
kuddus.exam();

const badamAli = {
  name: "rohim ali",
  money: 5000,
};
badamAli.exam = kuddus.exam;
badamAli.exam();

function clickHandaler() {
  console.log("inside the handaler", this);
}
document.getElementById('btn-click').addEventListener('click', function(){
    console.log(this);
})
