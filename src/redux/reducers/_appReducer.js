const intialState = {
  user: null,
  cart: [],
  auth_popup:false
};

const AppReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

      case "SET_AUTH_POP":
      return {
        ...state,
        auth_popup: action.auth
      };
      

      case "SET_CART":
        return {
          ...state,
          cart: [...state.cart,action.item]
        };

    default:
      return state;
  }
};

export default AppReducer;
