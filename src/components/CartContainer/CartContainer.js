import { Button, Card, CardActionArea, CardContent } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCartItem, getCartTotal } from '../../features/userSlice';
import CartItem from './CartItem';
// import { TrendingData } from '../Trending/TrendingData';

const CartContainer = () => {
    const {items,totalAmount} = useSelector((state)=>state.user);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getCartTotal());
    },[items])

    if(items.length===0){
        return(
            <>
                <h1>Your shopping Cart is Empty <span></span></h1>
                <Button variant='contained' onClick={()=>dispatch(getCartItem())}>Get Items</Button>
            </>
        )
    }
  return (
    <div>
    <h1>Your Shoping Cart</h1>
        <Card>
            {
                items.map((item)=>{
                    return(
                        <CartItem key={item.id} {...item}/>
                    )
                })
            }
           
                <h4> Total : {totalAmount}</h4>
            
            <CardActionArea>
                <Button onClick={()=>dispatch(clearCart())}>Clear Cart</Button>
            </CardActionArea>
        </Card>
    </div>
  )
}

export default CartContainer
