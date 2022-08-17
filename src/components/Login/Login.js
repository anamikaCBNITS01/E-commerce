import { Alert, AlertTitle, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import styles from './style.module.css'
import logo from '../../assets/logo3.png'
import { Link, useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from '../../features/userSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
    color: "white"
}

const Login = (props) => {
    const [signup, setSignUp] = useState(false);
    const [off, setOff] = useState(null);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")

    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('');
    const [isError, setIsError] = useState(false);

    const [signupSuccessfull, setSignupSuccessfull] = useState(false);

    let navigate = useNavigate();
    


    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const onSignupPage = () => {
        setSignUp(true)
    }


    const errorRegistered = () => {
        if (setSignupSuccessfull === false) {
            toast.error('error', { position: toast.POSITION.TOP_RIGHT })
        }
    }
    const successRegistered = () => {
        if (setSignupSuccessfull === true) {
            toast.success('successful', { position: toast.POSITION.TOP_RIGHT })
        }
    }


    const signUp = async (e) => {
        e.preventDefault()
        let userData = { email, password, confirmPassword, phone }


        if (password !== confirmPassword) {
            setShowErrorMessage(true)
            setCPasswordClass("Password and Confirm Password are not match try again !")

        }

        else {

            if (phone.length > 10) {
                setIsError(true);
            } else {
                toast.dismiss();


                fetch("http://localhost:3000/user/signup", {
                    method: "POST",
                    crossDomain: true,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                        confirmPassword,
                        phone
                    }),
                }).then((resp) => {
                    console.log("risponse od data", resp)
                    if (resp.ok === false) {
                        setSignupSuccessfull(false)
                        toast.error('This email address is alredy exist Try again !!', { position: toast.POSITION.TOP_CENTER, autoClose: false })


                    } else {

                        console.log("response", resp)
                        setSignUp(false)
                        setIsError(false)
                        setSignupSuccessfull(true)
                        toast.success('User Registered Successfully', { position: toast.POSITION.TOP_CENTER })



                    }
                })
            }
        }


    }


    const LoginSubmit = async (e) => {
        e.preventDefault();
        let userData = await { email, password, confirmPassword, phone }
        console.log("data", userData)

        // dispatch(login({
        //     email:email,
        //     password:password,
        //     conPass:conPass,
        //     number:number,
        //     loggedIn:true,
        // }))

        fetch("http://localhost:3000/user/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                password,
            }),

        }).then((resp) => {
            console.log("response", resp)
            if (resp.ok === false) {
                toast.error("Invalid email address and password !", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            else {

                console.log("response", resp)
                toast.success("Login Successfully ", {
                    position: toast.POSITION.TOP_CENTER
                });
                console.log("user login succesfully")
                navigate('/')
                // setIsLoggedin(true);
                setIsError(false)
                setOff(props.onClose)
                localStorage.setItem("userData",true, JSON.stringify(userData));
                localStorage.setItem('userDetails', JSON.stringify(userData));
            }
        })
    }
    const offDrawer = () => {
        setOff(props.onClose)
    }
    const CloseDrawer = () => {
        LoginSubmit();
        offDrawer();


    }

    

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                endAdornment={<ClearIcon onClick={props.onClose} />}
            >
                <Box className={styles.icon}>
                    <ClearIcon onClick={props.onClose} />
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
                                    <form onSubmit={signUp} id="myform">
                                        <TextField type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.inputField} variant="standard" name='email' label='Enter Email' required />
                                        <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.inputField} variant="standard" name='password' label='Enter Password' required />
                                        <TextField type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={styles.inputField} variant="standard" name='confirmPassword' label='Enter Confirm Password' required />
                                        {showErrorMessage ? <Alert severity="error">{cPasswordClass}</Alert> : null}
                                        <TextField type="number" value={phone} onChange={(e) => {
                                            setPhone(e.target.value);

                                        }

                                        } className={styles.inputField} variant="standard" name='phone' label='Enter Mobile number' error={isError} required />
                                        <Box className={styles.loginButton}>
                                            <Button type='submit' sx={style} form="myform">CONTINUE</Button>
                                        </Box>
                                        <Box className={styles.requestButton}>
                                            <Button className={styles.requestBtn} sx={{ color: "#2b334b" }} onClick={() => setSignUp(false)}>Existing User? Login</Button>
                                        </Box>
                                    </form>
                                </Box>
                                :
                                <Box className={styles.SignUpLoginBox}>
                                    <form onSubmit={LoginSubmit} id="loginform">
                                        <TextField type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.inputField} variant="standard" name='email' label='Enter Email' required />
                                        <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.inputField} variant="standard" name='password' label='Enter Password' required />
                                        <Box className={styles.loginButton}>
                                            <Button type='submit' sx={style} form="loginform">LogIn</Button>

                                        </Box>
                                    </form>

                                    <Box className={styles.signUpLinks}>
                                        <Typography className={styles.signUpLinks1} onClick={onSignupPage}>New to Shopping Mart? Create an account</Typography>
                                    </Box>
                                </Box>
                        }
                    </Box>
                </Box>
            </Dialog>
        </div>
    )
}

export default Login