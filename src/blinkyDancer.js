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
  //var oldStep = makeBlinkyDancer.prototype.step;
  // this.oldStep = Dancer.prototype.step.call(this);
    //  return makeBlinkyDancer;
};
  //makemakeBlinkyDancer.prototype{
 //   debugger;
  makeBlinkyDancer.prototype = new Dancer();
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
  makeBlinkyDancer.prototype.oldStep = Dancer.prototype.step;
  makeBlinkyDancer.prototype.step = function() {
    this.oldStep();
    alert('blinky steppin!');
    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$node.toggle();
  };

// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();

//     /* toggle() is a jQuery method to show/hide the <span> tag.
//      * See http://api.jquery.com/category/effects/ for this and
//      * other effects you can use on a jQuery-wrapped html tag. */
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };




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