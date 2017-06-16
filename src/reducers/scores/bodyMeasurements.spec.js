import bodyMeasurements, { totalScore } from './bodyMeasurements';

describe('scores reducer', () => {
  describe('receiving UPDATE_ATTRIBUTE', () => {
    describe('when the attributeName is shoulders', () => {
      describe('and its value is below the lowest threshold for shoulders', () => {
        it('sets the shoulders attribute to 0', () => {
          expect(bodyMeasurements({}, { type: 'UPDATE_ATTRIBUTE', attributeName: 'shoulders', value: 5 }))
            .toEqual({ shoulders: 0 });
        });
      });

      describe('and its value is equal to the first threshold', () => {
        it('sets the shoulders attribute to 1', () => {
          expect(bodyMeasurements({}, { type: 'UPDATE_ATTRIBUTE', attributeName: 'shoulders', value: 27 }))
            .toEqual({ shoulders: 1 });
        });
      });

      describe('and its value is greater than the first threshold but smaller than the second', () => {
        it('sets the shoulders attribute to 1', () => {
          expect(bodyMeasurements({}, { type: 'UPDATE_ATTRIBUTE', attributeName: 'shoulders', value: 30 }))
            .toEqual({ shoulders: 1 });
        });
      });

      describe('and its value is greater than the last threshold', () => {
        it('sets the shoulders attribute to 9', () => {
          expect(bodyMeasurements({}, { type: 'UPDATE_ATTRIBUTE', attributeName: 'shoulders', value: 60 }))
            .toEqual({ shoulders: 9 });
        });
      });
    });

    describe('when the attributeName is not included in the MEASUREMENTS_THRESHOLDS', () => {
      it('doesn\'t change the state', () => {
        expect(bodyMeasurements({}, { type: 'UPDATE_ATTRIBUTE', attributeName: 'my-attribute', value: 60 }))
          .toEqual({ });
      });
    });
  });
});

describe('totalScore', () => {
  it('sums up all attributes inside the state', () => {
    expect(totalScore({ foo: 1, bar: 2 })).toEqual(3);
  });

  it('returns 0 if there\'s no attribute in the state', () => {
    expect(totalScore({ })).toEqual(0);
  });
});
