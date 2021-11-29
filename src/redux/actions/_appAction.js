export const SetUser = (user) => ({
  type: "SET_USER",
  user: user
});

export const SetCart = (item)=>({
  type:"SET_CART",
  item:item
})

export const SetAuthPop = (auth)=>({
  type:"SET_AUTH_POP",
  auth:auth
})
