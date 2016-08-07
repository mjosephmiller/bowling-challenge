describe('Frame', function(){
  var frame;

    beforeEach(function(){
      frame = new Frame();
    });

  it('sets the first roll as the first frame', function(){
    expect(frame.roll).toEqual(1);
  });

  it('sets the default frame score to zero', function(){
    expect(frame.totalFrameScore).toEqual(0);
  });

  it('has a total frame score that sums the results of each bowl', function(){
    frame.firstBowl(4)
      frame.secondBowl(6)
      expect(frame.totalFrameScore).toEqual(10);
  });

  it('sets the firstBowlScore to zero', function(){
    expect(frame.firstBowlScore).toEqual(0);
  });

  it('is complete if first bowl knocks down all pins', function(){
    frame.firstBowl(10)
    expect(frame.isComplete).toBeTruthy();
  });

  it('is incomplete if first bowl knocks down less than all pins', function(){
    frame.firstBowl(8)
    expect(frame.isComplete).toBeFalsy();
  });

  it('sets the secondBowlScore to zero', function(){
    expect(frame.secondBowlScore).toEqual(0);
  });

  it('has a default complete value of false', function(){
    expect(frame.isComplete).toBeFalsy();
  });

  it('is complete after the second bowl', function()
    {frame.firstBowl(4)
      frame.secondBowl(6)
      expect(frame.isComplete).toBeTruthy();
    });

  describe('#firstBowl', function(){
    it('sets the firstBowlScore', function(){
      frame.firstBowl(3)
      expect(frame.firstBowlScore).toEqual(3)
    });
  });

});
