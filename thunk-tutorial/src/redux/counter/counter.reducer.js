const INITIAL_STATE = {
  count: 0
};

export const counterReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREASE':
    {
        return {
          ...state,
          count: state.count + 1
        }
    }
    case 'DECREASE':
    {
        return {
          ...state,
          count: state.count - 1
        }
    }

    default:
      return state;
  }
};
