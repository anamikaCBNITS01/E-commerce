import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import styles from './style.module.css'
import logo from '../../assets/logo3.png'
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from '../../features/userSlice'

const style={
    color:"white"
}

const Login = (props) => {
    const [signup, setSignUp] = useState(false);
    const [off, setOff] = useState(null);
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [conPass,setConPass]=useState("")
    const [number,setNumber]=useState("")

    const dispatch=useDispatch();
    const user=useSelector(selectUser);

    const onSignupPage = () => {
        setSignUp(true)
    }


    async function signUp(){
        let item={email,password,conPass,number}
        console.log("data",item)

        // dispatch(login({
        //     email:email,
        //     password:password,
        //     conPass:conPass,
        //     number:number,
        //     loggedIn:true,
        // }))

       let result = await axios({
  
            // Endpoint to send files
            url: "url",
            method: "POST",
            headers: {
                    'Content-Iype':'application/json',
                    "Accept":'application/json',
            },
          })
          result= await result.json();
          localStorage.setItem("user-info",JSON.stringify(result))
          //close drawer
          console.warn("result",result)
        
    }


    const LoginSubmit=()=>{
        let item={email,password,conPass,number}
        console.log("data",item)

        // dispatch(login({
        //     email:email,
        //     password:password,
        //     conPass:conPass,
        //     number:number,
        //     loggedIn:true,
        // }))
    }
    const offDrawer=()=>{
        setOff(props.onClose)
    }
    const CloseDrawer=()=>{
        LoginSubmit();
        offDrawer();
        

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
                    <img className={styles.image} src={logo} width="45%" />
                </Box>
                <Box className={styles.rightSide}>
                    {
                        signup ?
                            <Box className={styles.SignUpLoginBox}>
                                <TextField value={email} onChange={(e)=>setEmail(e.target.value)} className={styles.inputField}  variant="standard" name='email' label='Enter Email'/>
                                <TextField value={password} onChange={(e)=>setPassword(e.target.value)} className={styles.inputField}  variant="standard" name='password' label='Enter Password' />
                                <TextField value={conPass} onChange={(e)=>setConPass(e.target.value)} className={styles.inputField}  variant="standard" name='password' label='Enter Confirm Password' />
                                <TextField value={number} onChange={(e)=>setNumber(e.target.value)} className={styles.inputField}  variant="standard" name='number' label='Enter Mobile number' />
                                <Box className={styles.loginButton}>
                                    <Button onClick={signUp} type='submit' sx={style}>CONTINUE</Button>
                                </Box>
                                <Box className={styles.requestButton}>
                                    <Button className={styles.requestBtn} sx={{color:"#2b334b"}} onClick={() => setSignUp(false)}>Existing User? Login</Button>
                                </Box>
                            </Box>
                            :
                            <Box className={styles.SignUpLoginBox}>
                                <TextField value={email} onChange={(e)=>setEmail(e.target.value)} className={styles.inputField} variant="standard" name='email' label='Enter Email/Mobile number' />
                                <TextField value={password} onChange={(e)=>setPassword(e.target.value)} className={styles.inputField} variant="standard" name='password' label='Enter Password' />
                                <Box className={styles.loginButton}>
                                <Button onClick={CloseDrawer} sx={style}>LogIn</Button>

                                </Box>
                                <Box className={styles.orText}>or</Box>
                                <Box className={styles.requestButton}>
                                    <Button className={styles.requestBtn} sx={{color:"#2b334b"}}>Request OTP</Button>
                                </Box>
                                <Box className={styles.signUpLinks}>
                                    <Typography className={styles.signUpLinks1} onClick={onSignupPage}>New to Shopping Mart? Create an account</Typography>
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