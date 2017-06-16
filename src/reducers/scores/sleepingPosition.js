const sleepingPosition = (state = 1, action) => {
  switch (action.type) {
    case 'UPDATE_ATTRIBUTE':
      // here we are only interested in the attributeName sleepingPosition
      if(action.attributeName === 'sleepingPosition') {
        return 1;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export const totalScore = (sleepingPosition = 1) => sleepingPosition;

export default sleepingPosition;
