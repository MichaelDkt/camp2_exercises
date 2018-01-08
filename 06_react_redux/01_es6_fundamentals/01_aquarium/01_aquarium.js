class Aquarium {
  constructor (numberAlgaes, numberFishes) {
    this.numberAlgaes = 10;
    this.numberFishes = [];
  }
  addAlgae() {
    this.numberAlgaes ++;
  }
  addFish(fish) {
    this.numberFishes.push(fish);
  }
  passTime(){
    eat();
    listFishes();
    displayAquarium();
  }
}

class Fish {
  constructor (name, sex, type) {
    this.name = name;
    this.sex = sex;
    this.type = type;
  }
}
function listFishes() {
  return myAquarium.numberFishes.map(x => console.log(`${x.name} ${x.sex} ${x.type}`));
}

function eat() {
  const randumNumber = Math.round(Math.random()*myAquarium.numberFishes.length);
  for(let i=0; i<myAquarium.numberFishes.length; i++) {
    if (myAquarium.numberFishes[i].type === "carnivorous") {
      console.log("toto");
      myAquarium.numberFishes.splice(randumNumber, 1);
    } else if (myAquarium.numberFishes[i].type === "vegan") {
      console.log("papa");
      myAquarium.numberAlgaes--;
    }
  }
}

// displays the summarize of the aquarium
function displayAquarium(){
  console.log(`qty of Algaes : ${myAquarium.numberAlgaes}`);
}

const fish1 = new Fish("nemo", "M", "carnivorous");
const fish2 = new Fish("doria", "F", "vegan");
const fish3 = new Fish("red", "M", "carnivorous");
const fish4 = new Fish("blue", "F", "vegan");
const myAquarium = new Aquarium();
myAquarium.addAlgae();
myAquarium.addFish(fish1);
myAquarium.addFish(fish2);
myAquarium.addFish(fish3);
myAquarium.addFish(fish4);
myAquarium.passTime();



module.exports = {
  aquarium: Aquarium,
  fish: Fish
};
