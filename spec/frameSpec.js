describe('Frame', function(){
  var frame;

    beforeEach(function(){
      frame = new Frame();
    });

  it('the first roll is the first frame', function(){
    expect(frame.roll).toEqual(1);
  });
});
