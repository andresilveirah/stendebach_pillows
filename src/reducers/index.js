import { combineReducers } from 'redux';

const attributes = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ATTRIBUTE':
      return {...state, [action.attributeName]: action.value};
    default:
      return state;
  }
};

const score = (state = '', action) => {
  return state;
}

const reducer = combineReducers({ attributes, score });

export default reducer;
