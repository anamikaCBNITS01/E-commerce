import { Drawer } from '@mui/material'
import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import styles from './style.module.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CategoryIcon from '@mui/icons-material/Category';
import InterestsIcon from '@mui/icons-material/Interests';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Link } from 'react-router-dom';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const SideBar = (props) => {
  return (
    <Drawer open={props.open} onClose={props.onClose}>
        <div style={{float:"left",width:"100%",backgroundColor:"#5e798a",height:"100%"}}>
        <CancelIcon sx={{paddingLeft:"300px"}} onClick={props.onClose}/>
           <div>
                <div className={styles.ItemWithIcon}>
                    <div className={styles.IconColor}><HomeIcon/></div>
                    <div><Link to="/" className={styles.IconColor}>Home</Link></div>
                </div>
                <div className={styles.ItemWithIcon}>
                    <div className={styles.IconColor}><ProductionQuantityLimitsIcon/></div>
                    <div><Link to="/myOrder" className={styles.IconColor}>My Order</Link></div>
                </div>
                <div className={styles.ItemWithIcon}>
                    <div><CategoryIcon/></div>
                    <div><Link to="/category" className={styles.IconColor}>Category</Link></div>
                </div>
                <div className={styles.ItemWithIcon}>
                    <div><InterestsIcon/></div>
                    <div><Link to="/wishlist" className={styles.IconColor}>Wish List</Link></div>
                </div>
                <div className={styles.ItemWithIcon}>
                    <div><InfoIcon/></div>
                    <div><Link to="/about" className={styles.IconColor}>About</Link></div>
                </div>
                <div className={styles.ItemWithIcon}>
                    <div><AddIcCallIcon/></div>
                    <div><Link to="/contactUs" className={styles.IconColor}>Contact-Us</Link></div>
                </div>
           </div>
        </div>
    </Drawer>
  )
}

export default SideBar