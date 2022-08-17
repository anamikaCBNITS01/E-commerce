import { Button, Drawer } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import styles from './style.module.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CategoryIcon from '@mui/icons-material/Category';
import InterestsIcon from '@mui/icons-material/Interests';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Link, useNavigate } from 'react-router-dom';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Login from '../Login/Login';



const SideBar = (props) => {

    

    const [profile, setProfile] = useState(false)
    const [menuItem, setMenuItem] = useState(false)
    const [open, setOpen] = useState(false);
    
    let navigate = useNavigate();
   

    const openBox=()=>{
        setMenuItem(!menuItem)
    }
   
   

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const isProfile = () => {
        const loggedInUser = window.localStorage.getItem("userData")=="true";
        if(loggedInUser){
            setProfile(true)
            navigate('/profile')
        }else{
            setProfile(false)
            setOpen(true)
            return(<Login open={open}/>)
        }   

    }

    const data = window.localStorage.getItem("userData");
    const signout = () => {
        localStorage.removeItem("userData");
        setProfile(false)
        navigate('/')
        window.location.reload(true)

    }
    return (
        <Drawer open={props.open} onClose={props.onClose}>
            <div style={{ float: "left", width: "100%", backgroundColor: "#5e798a", height: "1000vh" }}>
                <CancelIcon sx={{ paddingLeft: "300px" }} onClick={props.onClose} />
                <div>
                    <div className={styles.ItemWithIcon}>
                        <div className={styles.IconColor}><HomeIcon /></div>
                        <div><Link to="/" className={styles.IconColor}>Home</Link></div>
                    </div>
                    <div className={styles.ItemWithIcon}>
                        <div>
                            <div className={styles.AccountClass} onClick={openBox}>
                            <div>Your Accounts</div>
                            <div><KeyboardArrowDownIcon/></div>
                             </div>
                            
                            <div className={menuItem?styles.ItemsD:styles.ItemsND}>
                                <ul>
                                    <li className={styles.AccountListItem}><Link to="/" className={styles.IconColor}>Account</Link></li>
                                    <li className={styles.AccountListItem}><div onClick={isProfile} className={styles.IconColor}>Your Profile</div></li>
                                    <li className={styles.AccountListItem}><Link to="/" className={styles.IconColor}>Login & Security</Link></li>
                                    <li className={styles.AccountListItem}><Link to="/" className={styles.IconColor}>Your Order</Link></li>
                                    <li className={styles.AccountListItem}><Link to="/" className={styles.IconColor}>Your Payment</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ItemWithIcon}>
                        <div className={styles.IconColor}><ProductionQuantityLimitsIcon /></div>
                        <div><Link to="/myOrder" className={styles.IconColor}>My Order</Link></div>
                    </div>
                    <div className={styles.ItemWithIcon}>
                        <div><CategoryIcon /></div>
                        <div><Link to="/category" className={styles.IconColor}>Category</Link></div>
                    </div>
                    <div className={styles.ItemWithIcon}>
                        <div><InterestsIcon /></div>
                        <div><Link to="/wishlist" className={styles.IconColor}>Wish List</Link></div>
                    </div>
                    <div className={styles.ItemWithIcon}>
                        <div><InfoIcon /></div>
                        <div><Link to="/about" className={styles.IconColor}>About</Link></div>
                    </div>
                    <div className={styles.ItemWithIcon}>
                        <div><AddIcCallIcon /></div>
                        <div><Link to="/contactUs" className={styles.IconColor}>Contact-Us</Link></div>
                    </div>

                    <div className={styles.ItemWithIcon}>
                        <div><AddIcCallIcon /></div>
                        <div><Button className={styles.IconColor}>{data && data ? <Button className={styles.IconColor} onClick={signout}>Logout</Button> : !data && <Button onClick={handleClickOpen} className={styles.IconColor}>Login</Button>}</Button></div>
                    </div>

                </div>
            </div>
            <Login open={open} onClose={handleClose} />
        </Drawer>
    )
}

export default SideBar