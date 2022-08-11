import {createSlice} from '@reduxjs/toolkit';
import { TrendingData } from '../components/AllProducts/Trending/TrendingData';


export const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        items:TrendingData,
        totalAmount: 0,
        totalCount:0
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user=null;
        },
        getCartTotal:(state)=>{
            let {totalAmount,totalCount} = state.items.reduce((cartTotal,cartItem)=>{
                const {price,amount} =cartItem;
                const itemsTotal=price*amount;
                cartTotal.totalAmount+=itemsTotal;
                cartTotal.totalCount+=amount;
                return cartTotal;
            },
            {totalAmount:0,totalCount:0}
            );

            state.totalAmount=parseInt(totalAmount.toFixed(2));
            state.totalCount=totalCount
        },
        increase: (state,action)=>{
            state.items=state.items.map((item)=>{
                if(item.id===action.payload){
                    return {...item,amount:item.amount+1};
                }
                return item;
            })
        },
        decrease: (state,action)=>{
            state.items=state.items.map((item)=>{
                if(item.id===action.payload){
                    return {...item,amount:item.amount-1};
                }
                return item;
            }).filter((item)=>item.amount!==0)
        },
        remove:(state,action)=>{
            state.items=state.items.filter((item)=>item.id !== action.payload)
        },
        clearCart:(state)=>{
            state.items=[];
        },
        getCartItem:(state)=>{
            state.items=TrendingData;
        }
    }
});

export const {login,logout}=userSlice.actions;

export const selectUser=(state)=>state.user.user;

export const {getCartTotal,increase,decrease,remove,clearCart,getCartItem} = userSlice.actions

export default userSlice.reducer;