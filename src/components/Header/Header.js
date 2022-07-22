import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CategoryIcon from '@mui/icons-material/Category';
import InterestsIcon from '@mui/icons-material/Interests';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import SideBar from '../Sidebar/SideBar';

const Header = () => {
    const [showModal,setShowModal]=useState(false);

    const handleClickOpen=()=>{
        setShowModal(true)
    }
    
    return (
        <div>
            <div className={styles.Header}>
                <div>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="open drawer"
                        sx={{color:"white",marginLeft:"1rem" }}
                    >
                        <button onClick={()=>setShowModal(true)} ><MenuIcon/></button>
                    </IconButton>
                </div>
                <div className={styles.itemsDiv}><Link to="/" className={styles.items}><span></span>Home</Link></div>
                <div><Link to="/about" className={styles.items}><span></span>About</Link></div>
                <div><Link to="/category" className={styles.items}><span></span>Category</Link></div>
                <div><Link to="/wishlist" className={styles.items}><span></span>WishList</Link></div>
                <div><Link to="/contactUs" className={styles.items}><span></span>Contact-Us</Link></div>
            </div>
            <SideBar open={showModal} onClose={()=>setShowModal(false)}/>
        </div>
    )
}

export default Header