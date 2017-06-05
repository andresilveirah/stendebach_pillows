const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ATTRIBUTE_UPDATED':
      return {...state, [action.attributeName]: action.value};
    default:
      return state;
  }
};

export default reducer;
