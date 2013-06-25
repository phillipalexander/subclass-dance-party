var Dancer = function(top, left, timeBetweenSteps) {
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
  // animate: function(entrance, startingEvent) {
  //   this.$node.addClass(entrance);
  //   // this.$node.removeClass(entrance);
  //   // this.$node.addClass(startingEvent);
  // }
};