// See Sparta courses for the exercise summary
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const orangeTree = {
  height : 0,
  age : 0,
  oranges : 0,
  alive : false,
  ageDie : randomInt(50, 100),

  ageOneYear : function() {
    this.age = this.age + 1;

    if (this.age < 10) {
       this.height = this.age * 25;
    } else if (this.age >= 10 && this.age < 20) {
       this.height = (9*25) + (this.age-9) * 10;
    } else if (this.age > 20 && this.age <= 100) {
      this.height = (9*25 + 10*10);
    }

    if (this.age  >= 5 && this.age < 10) {
      this.oranges = 10;
    } else if (this.age >= 10 && this.age < 20) {
       this.oranges = 20;
    } else if (this.age >=20 && this.age < 40) {
       this.oranges = 5;
    } else {
       this.oranges = 0;
    }

      if ((this.age >= 50 && this.age >= this.ageDie) || this.age >= 100) {
        this.alive = false;
      } else {
        this.alive = true;
      }
      return this;
  },
  pickAnOrange : function() {
    if (this.oranges > 0) {
      this.oranges = this.oranges - 1;
      return true;
    } else {
      return false;
    }
  },
  seed : function() {
    this.height = 0;
    this.age = 0;
    this.oranges = 0;
    this.alive = true;

  }
}





module.exports = orangeTree;
