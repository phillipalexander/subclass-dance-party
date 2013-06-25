var BouncyDancer = function(top, left, eventFrequency) {
  var newDancer = Dancer.call(this, top, left, eventFrequency, entrance, startingEvent);

  this.eventFrequency = eventFrequency;
  this.top = top;
  this.left = left;
  this.$node.addClass('space-invader');

  var danceTypes = ["flash", "shake", "bounce", "tada", "swing", "wobble", "wiggle", "pulse"]
  var entranceTypes = ["bounceIn", "bounceInUp", "bounceInDown", "bounceInLeft", "bounceInRight"]
  var startingEvent = danceTypes[Math.floor(danceTypes.length * Math.random())];
  var entrance = entranceTypes[Math.floor(entranceTypes.length * Math.random())];
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;
//BouncyDancer.prototype.oldStep = Dancer.prototype.step;
BouncyDancer.prototype.animate = function() {
  this.$node.addClass('animated');
  this.$node.addClass(entrance);
};


//BlinkyDancer.prototype.step = function() {
  // event frequency shit happens
//};


    // /*==========  BouncyDancer  ==========*/

    // $(".addBouncerButton").on("click", function(event) {
    //   debugger;
    //   var bouncerMakerFunctionName = $(this).data("bouncer-maker-function-name");

    //   var bouncerMakerFunction = window[bouncerMakerFunctionName];
    //   var danceTypes = ["flash", "shake", "bounce", "tada", "swing", "wobble", "wiggle", "pulse"]
    //   var entranceTypes = ["bounceIn", "bounceInUp", "bounceInDown", "bounceInLeft", "bounceInRight"]
    //   var startingEvent = danceTypes[Math.floor(danceTypes.length * Math.random())];
    //   var entrance = entranceTypes[Math.floor(entranceTypes.length * Math.random())];
    //   var bouncer = new bouncerMakerFunction(
    //     $("body").height() * Math.random(),
    //     $("body").width() * Math.random(),
    //     Math.random() * 1000,
    //     entrance,
    //     startingEvent
    //   );

    //   $('body').append(dancer.$node);