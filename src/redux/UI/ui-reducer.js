const uiState = {
  isCartVisible: true,
};

const uiReducer = (state = uiState, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN": {
      return {
        ...state,
        isCartVisible: !state.isCartVisible,
      };
    }
    default:
      return state;
  }
};

export default uiReducer;
