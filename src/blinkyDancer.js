var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //var makeBlinkyDancer = new Dancer(top, left, timeBetweenSteps);
  // makeBlinkyDancer.call(this, top);
  // makeBlinkyDancer.call(this, left);
  // makeBlinkyDancer.call(this, timeBetweenSteps);
  //debugger;
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var oldStep = Dancer.prototype.step.call(this, timeBetweenSteps);
    //  return makeBlinkyDancer;
};
  //makemakeBlinkyDancer.prototype{
 //   debugger;
  makeBlinkyDancer.prototype = new Dancer();
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
  makeBlinkyDancer.prototype.step = function() {
    oldStep();

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$node.toggle();
  };

  //  return makeBlinkyDancer;
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