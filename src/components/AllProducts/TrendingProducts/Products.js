import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import styles from './style.module.css'
import { styled } from '@mui/material/styles';
import pro1 from '../../../assets/product1.jpg'
import pro2 from '../../../assets/product2.jpg'
import pro3 from '../../../assets/product3.jpg'
import pro4 from '../../../assets/product4.jpg'
import pro5 from '../../../assets/product5.jpg'
import pro6 from '../../../assets/product6.jpg'
import pro7 from '../../../assets/product7.jpg'
import { TrendingData } from '../../AllProducts/Trending/TrendingData';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../features/userSlice';
import { useNavigate } from 'react-router-dom';


const Products = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const {items,totalAmount} = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    let navigate=useNavigate();

    const handleAdd=(item)=>{
            dispatch(addToCart(item));
            

    }

    // useEffect(()=>{
    //     dispatch(addToCart());
    // },[items])
    return (
        <div>
            <div>
                <center><h1>Trending Products</h1></center>
            </div>
            <div>
                <div>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            {
                                TrendingData.map((item) => {
                                    return (
                                        <Grid item xs>
                                            <Item>
                                                <Box>
                                                    <img className={styles.Images} src={item.image} alt='loading...' /><br />
                                                    <h2>{item.name}</h2>
                                                    <div>
                                                        <h3>Price: &#x20B9; {item.price} </h3>
                                                        {item.inStock?<div className={styles.InStock}>In Stock</div>:<div className={styles.outStock}>Out Of Stock</div>}
                                                    </div>
                                                    <div className={styles.Buttons}>
                                                        <div><button type='submit' className={styles.ButtonsAdd} onClick={()=>handleAdd(item)}>Add to Cart</button></div>
                                                        <div><button className={styles.ButtonsBuy}>Buy Now</button></div>
                                                    </div>
                                                </Box>
                                            </Item>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Products