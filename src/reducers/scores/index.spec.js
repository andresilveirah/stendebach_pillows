import scores, { totalScore } from './index';

describe('scores state structure', () => {
  it('contains bodyMeasurements', () => {
    expect(scores(undefined, { type: 'MY-TEST' })).toEqual({
      bodyMeasurements: {}
    });
  });
});

describe('totalScore', () => {
  it('returns the summed up score from bodyMeasurements', () => {
    expect(
      totalScore({
        scores: {
          bodyMeasurements: {}
        }}
      ))
    .toEqual(0);
  });
});
