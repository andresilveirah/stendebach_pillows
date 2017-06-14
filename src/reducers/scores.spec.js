import scores, { getPillowForScore } from './scores';

describe('getPillowForScore', () => {
  const scoreThresholds = [
    { score: 10, pillow: 'first pillow' },
    { score: 30, pillow: 'last pillow' },
    { score: 20, pillow: 'second pillow' }
  ];

  describe('when the score is below the lowest thresholds', () => {
    it('should return the pillow for the lowest score', () => {
      expect(getPillowForScore(9, scoreThresholds)).toEqual('first pillow');
    });
  });

  describe('when the score is above the biggest thresholds', () => {
    it('should return undefined', () => {
      expect(getPillowForScore(31, scoreThresholds)).toBeUndefined();
    });
  });

  describe('when the score matches one of the thresholds', () => {
    it('should return the pillow for that threshold', () => {
      expect(getPillowForScore(20, scoreThresholds)).toEqual('second pillow');
    });
  });
});

describe('scores reducer', () => {
  describe('receiving UPDATE_ATTRIBUTE', () => {
    describe('when the attributeName is shoulders', () => {
      describe('and its value is below the lowest threshold for shoulders', () => {
        it('sets the shoulders attribute to 0', () => {
          expect(scores({}, { type: 'UPDATE_ATTRIBUTE', attributeName: 'shoulders', value: 5 }))
            .toEqual({ shoulders: 0 });
        });
      });

      describe('and its value is equal to the first threshold', () => {
        it('sets the shoulders attribute to 1', () => {
          expect(scores({}, { type: 'UPDATE_ATTRIBUTE', attributeName: 'shoulders', value: 27 }))
            .toEqual({ shoulders: 1 });
        });
      });

      describe('and its value is greater than the first threshold but smaller than the second', () => {
        it('sets the shoulders attribute to 1', () => {
          expect(scores({}, { type: 'UPDATE_ATTRIBUTE', attributeName: 'shoulders', value: 30 }))
            .toEqual({ shoulders: 1 });
        });
      });

      describe('and its value is greater than the last threshold', () => {
        it('sets the shoulders attribute to 9', () => {
          expect(scores({}, { type: 'UPDATE_ATTRIBUTE', attributeName: 'shoulders', value: 60 }))
            .toEqual({ shoulders: 9 });
        });
      });
    });
  });
});
