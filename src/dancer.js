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
  },
  animate: function(entrance, startingEvent, danceTypes) {
    var that = this;
    setInterval(function(){
      that.$node.removeClass(entrance);
      that.$node.addClass(startingEvent);
      entrance = startingEvent;
      startingEvent = danceTypes[Math.floor(danceTypes.length * Math.random())];
   //   that.animate(entrance, startingEvent, danceTypes);
    }, 500);
  }
};