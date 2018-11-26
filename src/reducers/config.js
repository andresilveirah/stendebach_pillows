const emptyConfig = {
  pillows: {
    small: {},
    medium: {},
    big: {}
  },
  pictures: {
    example: ""
  }
}

export default (state = emptyConfig, action) => {
  switch (action.type) {
    case 'CONFIG_READY':
      return { ...state, ...action.config, status: 'READY' };
    default:
      return state;
  }
};
