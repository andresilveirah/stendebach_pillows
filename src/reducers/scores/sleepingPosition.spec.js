import sleepingPosition, { totalScore } from './sleepingPosition';

let action;

describe('scores reducer', () => {
  describe('receiving UPDATE_ATTRIBUTE', () => {
    beforeEach(() => { action = { type: 'UPDATE_ATTRIBUTE' } });

    describe('when the attributeName is sleepingPosition', () => {
      beforeEach(() => { action = {...action, attributeName: 'sleepingPosition' }});

      describe('and value is unknown', () => {
        it('returns 1', () => {
          expect(sleepingPosition(undefined, action)).toEqual(1);
        });
      });
    });
  });
});

describe('totalScore', () => {
  it('returns 1 if there\'s no attribute in the state', () => {
    expect(totalScore(undefined)).toEqual(1);
  });

  it('whatever is the value of the state', () => {
    expect(totalScore('my sleepingPosition')).toEqual('my sleepingPosition');
  });
});
