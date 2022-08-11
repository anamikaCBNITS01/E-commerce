import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import profile from '../../../assets/profile.jpg';
import EditIcon from '@mui/icons-material/Edit';
import styles from './style.module.css'
import { FormControl, FormControlLabel, FormLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField } from '@mui/material';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function EditProfile() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    

    return (
        <Card sx={{ maxWidth: "50%", textAlign: "center", marginLeft: "25rem", marginTop: "30px", height: "100%" }}>
            <CardContent>
                <Typography variant='h5'>
                    Edit Your Profile
                </Typography>
                <form>
                <Typography  sx={{marginTop:"50px"}}>
                <img style={{width:"110px",height:"110px"}} src={profile} alt="loading...."/><EditIcon className={styles.iconProfile}/>
                </Typography>
                    <Typography sx={{ marginTop: 5 }} color="text.secondary" gutterBottom>
                        <TextField id="filled-basic" label="Enter Your Full Name" variant="standard" />
                    </Typography>
                    <Typography sx={{ marginTop: 2 }} color="text.secondary" gutterBottom>
                        <TextField id="filled-basic" label="Enter Your Email Address " variant="standard" />
                    </Typography>
                    <Typography sx={{ marginTop: 2 }} color="text.secondary" gutterBottom>
                        <TextField id="filled-basic" label="Enter Your Phone Number " variant="standard" />
                    </Typography>
                    <FormControl sx={{ marginTop: 3 }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl><br />
                    <FormControl sx={{ width: "50%", marginTop: "10px" }}>
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Bhopal</MenuItem>
                            <MenuItem value={20}>Indore</MenuItem>
                            <MenuItem value={30}>Pune</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography sx={{marginTop:"20px"}}>
                    <InputLabel>Date Of Birth</InputLabel>
                        <Input sx={{marginTop:"10px"}} type="date"/>
                    </Typography>
                    
                </form>
            </CardContent>
            <div style={{display:"flex",justifyContent:"flex-end"}}>
                <div><Button sx={{marginRight:"10px"}} variant='contained' color="success">Save</Button></div>
            </div>
        </Card>
    );
}
