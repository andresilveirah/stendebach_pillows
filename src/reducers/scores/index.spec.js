import scores, { totalScore } from './index';

describe('scores state structure', () => {
  it('contains bodyMeasurements and sleepingPosition', () => {
    expect(scores(undefined, { type: 'MY-TEST' })).toEqual({
      bodyMeasurements: {},
      sleepingPosition: 1,
      mattressType: 1
    });
  });
});

describe('totalScore', () => {
  it('returns the summed up score from bodyMeasurements times the sleepingPosition times the mattressType', () => {
    expect(
      totalScore({
        scores: {
          bodyMeasurements: {
            foo: 2
          },
          sleepingPosition: 5,
          mattressType: 3
        }}
      ))
    .toEqual(30);
  });
});
