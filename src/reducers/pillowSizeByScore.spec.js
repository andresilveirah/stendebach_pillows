import getPillowSizeByScore from './pillowSizeByScore';

let thresholds;

describe('getPillowSizeByScore', () => {
  describe('when the score is lower than the lowest maximumScore', () => {
    beforeEach(() => {
      thresholds = [
        { maximumScore: 10, pillow: 'first pillow' }
      ];
    });

    it('returns the first pillow', () => {
      expect(getPillowSizeByScore(9, thresholds)).toEqual('first pillow');
    });
  });

  describe('when the score is between two maximumScore\'s', () => {
    beforeEach(() => {
      thresholds = [
        { maximumScore: 10, pillow: 'first pillow' },
        { maximumScore: 20, pillow: 'last pillow' }
      ];
    });

    it('returns the pillow assigned for the highest maximumScore', () => {
      expect(getPillowSizeByScore(15, thresholds)).toEqual('last pillow');
    });
  });

  describe('when the score is higher than the biggest maximumScore', () => {
    beforeEach(() => {
      thresholds = [
        { maximumScore: 10, pillow: 'first pillow' }
      ];
    });

    it('returns undefined', () => {
      expect(getPillowSizeByScore(11, thresholds)).toBeUndefined();
    });
  });
});
