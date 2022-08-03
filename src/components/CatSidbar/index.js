import React from 'react';
import { styled } from '@mui/material/styles';
import styles from './style.module.css'
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const CategorySidebar = () => {
  return (
    <div>
         <div>
          <div className={styles.Box}>
            <h3>Home & kicthen</h3>
            <div><Link className={styles.link} to='/fans'>Fans</Link></div>
            <div><Link className={styles.link} to='/water_purifeirs'>Water Purifiers</Link></div>
            <div><Link className={styles.link} to='/mixer'>Mixture Grinders</Link></div>
          </div>
          <div>
            <h3>Furniture</h3>
            <div><Link className={styles.link} to='/chairs'>Chairs</Link></div>
            <div><Link className={styles.link} to='/tables'>Tables</Link></div>
            <div><Link className={styles.link} to='/sofa'>Sofa</Link></div>
          </div>
          <div>
            <h3>Sports & Fitness</h3>
            <div><Link className={styles.link} to='/homeDecor'>Badminton</Link></div>
            <div><Link className={styles.link} to='/homeDecor'>Dumbbells</Link></div>
            <div><Link className={styles.link} to='/homeDecor'>Exercise Bike</Link></div>
          </div>
          <div>
            <h3>Bags, Wallets & Luggage</h3>
            <div><Link className={styles.link} to='/homeDecor'>Bags</Link></div>
            <div><Link className={styles.link} to='/homeDecor'>Hand Bags</Link></div>
            <div><Link className={styles.link} to='/homeDecor'>Luggage</Link></div>
          </div>
          <div>
            <h3>Scientific Supplies</h3>
            <div><Link className={styles.link} to='/homeDecor'>sanitizer spray</Link></div>
            <div><Link className={styles.link} to='/homeDecor'>Laboratory Retort Support Stand</Link></div>
            <div><Link className={styles.link} to='/homeDecor'>Laboratory Grade Glass Beakers</Link></div>
          </div>
          <div>
            <h3>Home & Electronics</h3>
            <div><Link className={styles.link} to='/homeDecor'>Iron</Link></div>
            <div><Link className={styles.link} to='/homeDecor'>Mobiles</Link></div>
            <div><Link className={styles.link} to='/homeDecor'>Laptops</Link></div>
          </div>
        </div>
    </div>
  )
}

export default CategorySidebar