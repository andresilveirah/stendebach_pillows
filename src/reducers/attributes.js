const attributes = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ATTRIBUTE':
      return {...state, [action.attributeName]: action.value};
    default:
      return state;
  }
};

export default attributes;
