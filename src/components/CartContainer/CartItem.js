import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch } from 'react-redux';
import { decrease, increase, remove } from '../../features/userSlice';

const CartItem = ({ id, image, name, about, price, rating,amount }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <Card>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={image}
                    alt="Live from space album cover"
                />
                <CardContent>
                <Box> {name}</Box>
                <Box>{about}</Box>
                <Box>{price}</Box>
                <Box>{rating}</Box>

                </CardContent>
                <CardActionArea>
                    <Button><AddCircleOutlineIcon onClick={()=>dispatch(increase(id))}/>{amount}<RemoveCircleOutlineIcon onClick={()=>dispatch(decrease(id))}/></Button><br/>
                    <Button onClick={()=>dispatch(remove(id))}>Delete</Button>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CartItem
