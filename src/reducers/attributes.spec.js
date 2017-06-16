import attributes from './attributes';

let action;

describe('attributes reducer', () => {
  describe('when receiving an UPDATE_ATTRIBUTE action', () => {
    beforeEach(() => { action = { type: 'UPDATE_ATTRIBUTE', attributeName: 'foo', value: 'bar' } });

    describe('and the state doesn\'t yet contain the attributeName in it', () => {
      it('records the action\'s attributeName and value to its state object', () => {
        expect(attributes(undefined, action)).toEqual({ foo: 'bar' });
      });
    });

    describe('and the state already contain the attributeName in it', () => {
      it('updates the value attributed to attributeName', () => {
        const previousState = { foo: 'some bar' };
        expect(attributes(previousState, action)).toEqual({ foo: 'bar' });
      });
    });
  });
});
