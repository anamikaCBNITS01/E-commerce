import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';

import cat1 from '../../../assets/home4.jpg'
import cat2 from '../../../assets/chair4.jpg'
import cat3 from '../../../assets/product3.jpg';
import cat4 from '../../../assets/cat44.jpg'
import cat5 from '../../../assets/cat55.jpg'
import cat6 from '../../../assets/cat6.png';
import styles from './style.module.css';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CategoryNav = () => {
    let navigate=useNavigate();
    return (
        <div className={styles.CategoryNav}>
            <div>
                <div className={styles.FlexBox}>
                    <div>
                        <div>
                        <img className={styles.Images} src={cat1} />
                        </div>
                        <div className={styles.ImagesText} onClick={()=>navigate("home-and-kicthen")}>Home & Kitchen</div>
                    </div>
                    <div>
                        <img className={styles.Images} src={cat2} />
                        <div className={styles.ImagesText} onClick={()=>navigate("furniture")}>Furnitures</div>
                    </div>
                    <div>
                        <img className={styles.Images} src={cat3} />
                        <div className={styles.ImagesText} onClick={()=>navigate("sports-and-fitness")}>Sports & Fitness</div>
                    </div>
                    <div>
                        <img className={styles.Images} src={cat4} />
                        <div className={styles.ImagesText}>Wallets & Luggage</div>
                    </div>
                    <div>
                        <img className={styles.Images5} src={cat5} />
                        <div className={styles.ImagesText}>Home & Electronics</div>
                    </div>
                    <div>
                        <img className={styles.Images} src={cat6} />
                        <div className={styles.ImagesText}>Scientific Supplies</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryNav