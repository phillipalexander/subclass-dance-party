var Dancer = function(top, left, timeBetweenSteps, entrance, startingEvent) {
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);

};

Dancer.prototype = {
  step: function() {
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
  }
  animate: function(){

  }
};