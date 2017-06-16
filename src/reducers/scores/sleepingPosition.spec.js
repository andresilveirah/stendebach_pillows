import sleepingPosition, { totalScore } from './sleepingPosition';

let action;

const sleepingPositionScores = {
  bellyDown: 1,
  backDown: 1.2,
  lateralLeaning: 1.3,
  lateral: 1.5
};

describe('scores reducer', () => {
  describe('receiving UPDATE_ATTRIBUTE', () => {
    beforeEach(() => { action = { type: 'UPDATE_ATTRIBUTE' } });

    describe('when the attributeName is sleepingPosition', () => {
      beforeEach(() => { action = {...action, attributeName: 'sleepingPosition' } });

      describe('and value is unknown', () => {
        it('returns 1', () => {
          expect(() => { sleepingPosition(undefined, action)})
            .toThrow(/could not find a score/i);
        });
      });

      Object.keys(sleepingPositionScores).forEach(value => {
        describe('and value is unknown', () => {
          beforeEach(() => { action = {...action, value } });

          it(`returns the score of ${sleepingPositionScores[value]}`, () => {
            expect(sleepingPosition(undefined, action)).toEqual(sleepingPositionScores[value]);
          });
        });
      })
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
