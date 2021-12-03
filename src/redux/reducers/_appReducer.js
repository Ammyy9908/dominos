const intialState = {
  user: false,
  cart: [],
  auth_popup:false,
  orders:[]
};

const AppReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

      case "REMOVE_ITEM":{
        const index = state.cart.findIndex(
          (basketItem) => basketItem.item.id === action.id
        );

        console.log(index);

        let newBasket = [...state.cart];

        if(index>=0){
          newBasket.splice(index, 1);
        }

        return {
          ...state,
          cart: newBasket
        }
      }

      case "INCREMENT":{
        const index = state.cart.findIndex(
          (basketItem) => basketItem.item.id === action.id
        );

        state.cart[index].qty += 1;
        return {
          ...state,
          cart: [...state.cart]
        }
      }


      case "DECREMENT":{
        const index = state.cart.findIndex(
          (basketItem) => basketItem.item.id === action.id
        );

        state.cart[index].qty -= 1;
        return {
          ...state,
          cart: [...state.cart]
        }
      }

      case "SET_ORDERS":
      return {
        ...state,
        orders: action.orders
      };

      case "SET_AUTH_POP":
      return {
        ...state,
        auth_popup: action.auth
      };
      

      case "SET_CART":
        const index = state.cart.findIndex(
          (basketItem) => basketItem.item.id === action.item.item.id
        );
        console.log(action.item.item.id);
        console.log(index);
        if(index>=0){
          state.cart[index].qty += 1;
          return {
            ...state,
            cart: [...state.cart]
          }
        }
        else{
          return {
            ...state,
            cart: [...state.cart,action.item]
          };
        }
        

    default:
      return state;
  }
};

export default AppReducer;
