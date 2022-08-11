import React from 'react'
import { Box, Button, Card, CardActions, CardContent, InputAdornment, TextField, Typography } from '@mui/material'
import styles from './style.module.css';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <Box className={styles.container}>
            <Card className={styles.Card}>
            <Box>
                <h1>Contact Us</h1>
            </Box>
                <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Enter Your Name"
                            className={styles.input}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Enter Your Email Id"
                            className={styles.input}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Enter Your Phone Number"
                            className={styles.input}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocalPhoneIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                    </Typography>
                    <Typography>
                        <TextField
                            id="filled-multiline-static"
                            label="Comment"
                            className={styles.input}
                            multiline
                            rows={4}
                            defaultValue="Write your comment here..."
                            fullWidth
                            variant="filled"
                        />
                    </Typography>
                </CardContent>
                <CardActions className={styles.input}>
                    <Button variant='contained' size="small">Submit</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Contact