import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import styles from './style.module.css'
import Login from '../Login/Login'
// import Login from '../Login/Login'

const Navs = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <AppBar className={styles.navbar}>
            <Box className={styles.loginButton}>
                <Button onClick={handleClickOpen}>Login</Button>
            </Box>
            <Login open={open} onClose={handleClose}/>
        </AppBar>
    )
}

export default Navs
