const SLEEPING_POSITION_SCORES = {
  bellyDown: 1,
  backDown: 1.2,
  lateralLeaning: 1.3,
  lateral: 1.5
};

const sleepingPosition = (state = 1, action) => {
  switch (action.type) {
    case 'UPDATE_ATTRIBUTE':
      // here we are only interested in the attributeName sleepingPosition
      if(action.attributeName === 'sleepingPosition') {
        const sleepingPositionScore = SLEEPING_POSITION_SCORES[action.value];
        if(sleepingPositionScore === undefined) {
          throw new Error(`could not find a score for ${action.attributeName} with the value of ${action.value}`);
        }
        return sleepingPositionScore;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export const totalScore = (sleepingPosition = 1) => sleepingPosition;

export default sleepingPosition;
