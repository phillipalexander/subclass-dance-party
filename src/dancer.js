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
  animate: function(entrance, startingEvent, danceTypes, exitTypes) {
    var exitProbability = 1/20;
    var that = this;
    setInterval(function(){
      var exitChance = Math.pow(($('.space-invader').length) * Math.random(), 0.8) + 1;
      if(exitChance < exitProbability * $('.space-invader').length) {
        var exit = exitTypes[Math.floor(exitTypes.length * Math.random())];
        that.$node.removeClass(entrance);
        that.$node.addClass(exit);
        setTimeout(function(){that.$node.remove()}, 1000);
      }
      that.$node.removeClass(entrance);
      that.$node.addClass(startingEvent);
      entrance = startingEvent;
      startingEvent = danceTypes[Math.floor(danceTypes.length * Math.random())];
   //   that.animate(entrance, startingEvent, danceTypes);
    }, 500);
  }
};
// bit.ly/1223oZK
