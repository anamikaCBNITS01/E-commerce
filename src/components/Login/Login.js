import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import styles from './style.module.css'
import logo from '../../assets/loginLogo.png'
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';

const style={
    color:"white"
}

const Login = (props) => {
    const [signup, setSignUp] = useState(false)

    const onSignupPage = () => {
        setSignUp(true)
    }
    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            endAdornment={<ClearIcon  onClick={props.onClose}/>}
        >
        <Box className={styles.icon}>
        <ClearIcon  onClick={props.onClose}/>
        </Box>
            <Box className={styles.mainBox}>
                <Box className={styles.leftSide}>
                    <h3 className={styles.heading}>{signup ? "Looks like you're new here!" : "Login"}</h3>
                    <p className={styles.content}>{signup ? "Sign up with your mobile number to get started" : "Get access to your Orders, Wishlist and Recommendations"}</p>
                    <img className={styles.image} src={logo} width="100%" />
                </Box>
                <Box className={styles.rightSide}>
                    {
                        signup ?
                            <Box className={styles.SignUpLoginBox}>
                                <TextField className={styles.inputField}  variant="standard" name='email' label='Enter Email'/>
                                <TextField className={styles.inputField}  variant="standard" name='password' label='Enter Password' />
                                <TextField className={styles.inputField}  variant="standard" name='password' label='Enter Confirm Password' />
                                <TextField className={styles.inputField}  variant="standard" name='number' label='Enter Mobile number' />
                                <Box className={styles.text}>By continuing, you agree to Flipkart's <Link className={styles.TNP} to="/terms">Terms of Use</Link> and <Link className={styles.TNP} to="/privacy">Privacy Policy.</Link></Box>
                                <Box className={styles.loginButton}>
                                    <Button type='submit' sx={style}>CONTINUE</Button>
                                </Box>
                                <Box className={styles.requestButton}>
                                    <Button className={styles.requestBtn} onClick={() => setSignUp(false)}>Existing User? Login</Button>
                                </Box>
                            </Box>
                            :
                            <Box className={styles.SignUpLoginBox}>
                                <TextField className={styles.inputField} variant="standard" name='email' label='Enter Email/Mobile number' />
                                <TextField className={styles.inputField} variant="standard" name='password' label='Enter Password' />
                                <Box className={styles.text}>By continuing, you agree to Flipkart's <Link to="/terms" className={styles.TNP}>Terms of Use</Link> and <Link className={styles.TNP} to="/privacy">Privacy Policy.</Link></Box>
                                <Box className={styles.loginButton}>
                                    <Button sx={style}>Login</Button>
                                </Box>
                                <Box className={styles.orText}>or</Box>
                                <Box className={styles.requestButton}>
                                    <Button className={styles.requestBtn}>Request OTP</Button>
                                </Box>
                                <Box className={styles.signUpLinks}>
                                    <Typography className={styles.signUpLinks1} onClick={onSignupPage}>New to Flipkart? Create an account</Typography>
                                    {/* <Button className={styles.signUpLinks1} onClick={()=>setSignUp(true)} >New to Flipkart ?</Button>
                                    <Button className={styles.signUpLinks1} onClick={()=>setSignUp(true)}>Create an account</Button> */}
                                </Box>
                            </Box>
                    }
                </Box>
            </Box>
        </Dialog>
    )
}

export default Login