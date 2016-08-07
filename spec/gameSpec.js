describe('Game', function(){
  var game;

    beforeEach(function(){
      game = new Game();
    });

    it('starts with a total score of zero', function(){
      expect(game.totalScore).toEqual(0);
    });

    it('starts with an empty array of frames', function(){
      expect(game.frames).toEqual([]);
    });
});
