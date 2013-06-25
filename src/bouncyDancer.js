var BouncyDancer = function(top, left, eventFrequency, entrance, startingEvent) {
  var newDancer = Dancer.call(this, top, left, eventFrequency, entrance, startingEvent);
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
};
BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;
BouncyDancer.prototype.oldStep = Dancer.prototype.step;
BouncyDancer.prototype.animate = function() {
  this.$node.addClass('animate')
};
BlinkyDancer.prototype.step = function() {
  // event frequency shit happens
};