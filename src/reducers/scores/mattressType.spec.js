import mattressType, { totalScore } from './mattressType';

let action;

const mattressTypeScores = {
  watterBed: 1,
  soft: 1.2,
  medium: 1.3,
  hard: 1.5
};

describe('scores reducer', () => {
  describe('receiving UPDATE_ATTRIBUTE', () => {
    beforeEach(() => { action = { type: 'UPDATE_ATTRIBUTE' } });

    describe('when the attributeName is mattressType', () => {
      beforeEach(() => { action = {...action, attributeName: 'mattressType' } });

      describe('and value is unknown', () => {
        it('returns 1', () => {
          expect(() => { mattressType(undefined, action)})
            .toThrow(/could not find a score/i);
        });
      });

      Object.keys(mattressTypeScores).forEach(value => {
        describe('and value is unknown', () => {
          beforeEach(() => { action = {...action, value } });

          it(`returns the score of ${mattressTypeScores[value]}`, () => {
            expect(mattressType(undefined, action)).toEqual(mattressTypeScores[value]);
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
    expect(totalScore('my mattressType')).toEqual('my mattressType');
  });
});
