const MATTESS_TYPE_SCORES = {
  watterBed: 1,
  soft: 1.2,
  medium: 1.3,
  hard: 1.5
};

const mattressType = (state = 1, action) => {
  switch (action.type) {
    case 'UPDATE_ATTRIBUTE':
      // here we are only interested in the attributeName mattressType
      if(action.attributeName === 'mattressType') {
        const mattressTypeScore = MATTESS_TYPE_SCORES[action.value];
        if(mattressTypeScore === undefined) {
          throw new Error(`could not find a score for ${action.attributeName} with the value of ${action.value}`);
        }
        return mattressTypeScore;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export const totalScore = (mattressType = 1) => mattressType;

export default mattressType;
