describe('Game', function(){
  var game, frame;

    beforeEach(function(){
      game = new Game();
      frame = jasmine.createSpy('frame');

    });

    it('starts with a total score of zero', function(){
      expect(game.totalScore).toEqual(0);
    });

    it('start with the first frame', function(){
      expect(game.frames.length).toEqual(1);
    });

    it('should add a new frame after each one is completed', function(){
      game.frames[0].firstBowl(5)
      game.frames[0].secondBowl(5)
      game.addNextFrame()
      expect(game.frames.length).toEqual(2)
    });

    it('should return current frame when called', function(){
      expect(game.currentFrame()).not.toBe(undefined);
    });

    // it('should throw an error if 10 frames have been played', function(){
    //   game.frames[9]
    //   expect(game.addNextFrame()).toThrow(new Error("Maximum frames played"));
    // });
});
