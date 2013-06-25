var BlinkyDancer = function(top, left, timeBetweenSteps) {
  var newDancer = Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.oldStep = Dancer.prototype.step;
BlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};

//  return BlinkyDancer;
//};
/*// parent class constructor
var Animal = function (location) {
  this.location = location;
};

Animal.prototype.move = function () {
  this.location += 1;
};

//child class constructor
var Person = function (location, carSpeed) {
  Animal.call(this, location); //we are running Animal on the object NOT creating a new animal (no NEW keyword)
  this.carSpeed = carSpeed;
};

Person.prototype = new Animal();
person.prototype.constructor = Person;
Person.prototype.drive = function () {
  this.location += this.carSpeed;
};*/