// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  //var dancer = {};
  //this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.step();
  this.setPosition(top, left);
  //return Dancer;
};

Dancer.prototype = {
  //$node: $('<span class="dancer"></span>'),
  step: function() {
    //debugger;
    var that = this;
    setTimeout(function() {
      that.step();
    }, this.timeBetweenSteps);
  },
  setPosition: function(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  },
  yeah: function() {
    alert('yeah!');
  }
};