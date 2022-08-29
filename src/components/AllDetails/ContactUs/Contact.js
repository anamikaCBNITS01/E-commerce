import React from 'react'
import { Alert, Box, Button, Card, CardActions, CardContent, Chip, InputAdornment, TextareaAutosize, TextField, Typography } from '@mui/material'
import styles from './style.module.css';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <div>
            <div className={styles.divFlex}>
                <div className={styles.leftBox}>

                    <h1>Contact Us</h1>
                    <div>
                        <Alert icon={false} severity="success">
                            We would love to respond to your quaries and help you succeed.
                            Feel free to got in touch with Us
                        </Alert></div>
                    <Card>
                        <div className={styles.head}>Send Your Request</div>
                        <div>
                            <TextField className={styles.textField} id="filled-basic" label="Name" variant="filled" />
                            <TextField className={styles.textField} id="filled-basic" label="Phone" variant="filled" />
                        </div>
                        <div>
                            <TextField className={styles.textField} id="filled-basic" label="Email" variant="filled" />
                            <TextField className={styles.textField} id="filled-basic" label="Subject" variant="filled" />
                        </div>
                        <div>
                            <TextField
                                className={styles.textFieldMeaage}
                                fullWidth
                                id="filled-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                                variant="filled"
                            />
                        </div>
                        <CardActions>
                            <Button variant='contained'>Submit</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className={styles.rightBox}>
                    <Card className={styles.RightBoxContent}>
                        <h3 className={styles.BoxHeading}>Reach Us</h3>
                        <div className={styles.BoxContent}>
                            <div className={styles.divFlexContact}>
                                <div><h4>Email :</h4></div><div>contact@gmail.com</div>
                            </div>
                            <div className={styles.divFlexContact}>
                                <div><h4>Phone :</h4></div><div>1234567890</div>
                            </div>
                            <div className={styles.divFlexContact}>
                                <div><h4>state :</h4></div><div>Madhya Pradesh</div>
                            </div>
                            <div className={styles.divFlexContact}>
                                <div><h4>city :</h4></div><div>Delhi</div>
                            </div>
                            <div className={styles.divFlexContact}>
                                <div><h4>Website : </h4></div><div>http://localhost:3001/</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Contact