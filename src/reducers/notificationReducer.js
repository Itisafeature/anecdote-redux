const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.text;
    case 'REMOVE_NOTIFICATION':
      return '';
    default:
      return state;
  }
};

export const setNotification = (text, seconds) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      text,
    });
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTIFICATION',
      });
    }, seconds * 1000);
  };
};

export default notificationReducer;
