// See Sparta courses for the exercise summary
const car = {
  speed : 0,
  time : 0,
  distance : 0,
  newDistance : 0,

  start : function() {
    this.speed = 0;
    this.time = 0;
    this.distance = 0;
    this.newDistance = 0;
    return this;
  },
  changeSpeed : function(speed) {
    this.speed = speed;
    return this;
  },
  drive : function(time) {
    this.time = time;
    this.distance = (this.speed/60) * time;
    this.newDistance = this.distance + this.newDistance;
    return this;
  },
  showDistance : function() {
    console.log(`${this.newDistance} Km`);
  }
}

car.start().changeSpeed(130).drive(42).showDistance();

module.exports = car;
