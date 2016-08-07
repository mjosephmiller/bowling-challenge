function Game() {
  this.totalScore = 0;
  this.frames = [new Frame()];
}

Game.prototype.addNextFrame = function(){
  this.frames.push(new Frame)
};

Game.prototype.currentFrame = function(){
  return this.frames[this.frames.length-1];
};
