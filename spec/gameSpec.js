describe('Game', function(){
  var game;

    beforeEach(function(){
      game = new Game();
    });

    it('starts with a total score of zero', function(){
      expect(game.totalScore).toEqual(0);
    });

    it('starts with the first frame', function(){
      expect(game.frame).toEqual(1);
    });
});
