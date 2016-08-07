function Frame() {
  this.roll = 1
  this.totalFrameScore = 0
  this.firstBowlScore = 0
  this.secondBowlScore = 0
  this.isComplete = false
}

Frame.prototype.firstBowl = function(knockedPins){
  this.firstBowlScore = knockedPins;
  this.totalFrameScore = knockedPins;
  if (this.firstBowlScore === 10) {
    this.isComplete = true;
  }
};

Frame.prototype.secondBowl = function(knockedPins){
  this.secondBowlScore = knockedPins;
  this.totalFrameScore += knockedPins;
  this.isComplete = true;
}
