import {createSlice} from '@reduxjs/toolkit';
import { TrendingData } from '../components/AllProducts/Trending/TrendingData';
import {toast} from 'react-toastify'

const initialState = {
  cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user=null;
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
              (cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;
      
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
      
                return cartTotal;
              },
              {
                total: 0,
                quantity: 0,
              }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
          },
        increase: (state,action)=>{
            state.items=state.items.map((item)=>{
                if(item.id===action.payload){
                    return {...item,amount:item.amount+1};
                }
                return item;
            })
        },

        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (state.cartItems[itemIndex].cartQuantity > 1) {
              state.cartItems[itemIndex].cartQuantity -= 1;
      
              toast.info("Decreased product quantity", {
                position: "bottom-left",
              });
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
              const nextCartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
              );
      
              state.cartItems = nextCartItems;
      
              toast.error("Product removed from cart", {
                position: "bottom-left",
              });
            }
      
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          },
        removeFromCart(state, action) {
            state.cartItems.map((cartItem) => {
              if (cartItem.id === action.payload.id) {
                const nextCartItems = state.cartItems.filter(
                  (item) => item.id !== cartItem.id
                );
      
                state.cartItems = nextCartItems;
      
                toast.error("Product removed from cart", {
                  position: "bottom-left",
                });
              }
              localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
              return state;
            });
          },
        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error("Cart cleared", { position: "bottom-left" });
          },
        getCartItem:(state)=>{
            state.items=TrendingData;
        },
        addToCart(state, action) {
            const existingIndex = state.cartItems.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (existingIndex >= 0) {
              state.cartItems[existingIndex] = {
                ...state.cartItems[existingIndex],
                cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
              };
              toast.info("Increased product quantity", {
                position: "bottom-left",
              });
            } else {
              let tempProductItem = { ...action.payload, cartQuantity: 1 };
              state.cartItems.push(tempProductItem);
              toast.success("Product added to cart", {
                position: "bottom-left",
              });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          },
    }
});

export const {login,logout}=userSlice.actions;

export const selectUser=(state)=>state.user.user;

export const {getTotals,increase,decreaseCart,removeFromCart,clearCart,getCartItem,addToCart} = userSlice.actions

export default userSlice.reducer;