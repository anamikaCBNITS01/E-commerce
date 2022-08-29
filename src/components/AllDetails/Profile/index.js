import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import profile from '../../../assets/profile.jpg'
import { Link } from 'react-router-dom'
import { Avatar, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, InputAdornment, Radio, RadioGroup, Table, TableCell, TableRow, TextField } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HowToRegSharpIcon from '@mui/icons-material/HowToRegSharp';
import HomeWorkSharpIcon from '@mui/icons-material/HomeWorkSharp';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ProfilePage() {
  const [userDetail, setUserDetail] = React.useState([])
  const [getFirstLatter, setGetFirstLatter] = React.useState([])

  const [open, setOpen] = React.useState(false);
  const [openAddress, setOpenAddress] = React.useState(true);

  const handleClick = () => {
    setOpenAddress(!openAddress);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const data = window.localStorage.getItem("userDetails");
  // console.log("data",data.parseInt(data))
  React.useEffect(() => {
    const user = JSON.parse(data)
    console.log("user Details", user)
    setUserDetail(user)
    setGetFirstLatter(user.email[0].toUpperCase())
  }, [])

  return (

    <Card sx={{ maxWidth: "50%", textAlign: "center", marginLeft: "25rem", marginTop: "50px", height: "100%" }}>

      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {/* <img  src={profile} alt="loading...."/> */}
        <center><Avatar style={{ width: "110px", height: "110px", backgroundColor: "green", fontSize: "50px" }}>{getFirstLatter}</Avatar></center>
      </Typography><br />
      <Chip sx={{ fontWeight: "bold" }} avatar={<Avatar sx={{ backgroundColor: "green", color: "white !important" }}>{getFirstLatter}</Avatar>} label={userDetail.email} />
      <Table>
        {/* <TableRow>
          <TableCell align="center">Email</TableCell>
          <TableCell align="center">{userDetail.email}</TableCell>
          <TableCell align="center"><Button variant='contained'>Edit</Button></TableCell>
        </TableRow> */}
        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }} align='right'>Name</TableCell>
          <TableCell >Anamika Rajput</TableCell>

        </TableRow>
        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }} align='right'>Phone Number</TableCell>
          <TableCell>1234566780</TableCell>

        </TableRow>
        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }} align='right'>Address</TableCell>
          <TableCell >Abc  Colony</TableCell>

        </TableRow>

        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }} align='right'>Gender</TableCell>
          <TableCell >Female</TableCell>

        </TableRow>
        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }} align='right'>City</TableCell>
          <TableCell >Bhopal</TableCell>

        </TableRow>
        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }} align='right'>State</TableCell>
          <TableCell >Madhya Pradesh</TableCell>

        </TableRow>
      </Table>
      <center>

        <Button sx={{ marginTop: "35px", position: "relative", bottom: "20px" }} variant='contained'><Link to={`/editProfile?email=${userDetail.email}`}>Edit</Link></Button>

      </center>
      {/* Edit Drawer */}

      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Update Your Profile"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField sx={{ marginTop: "10px" }} fullWidth id="standard-basic" label="Edit Name" variant="standard"
              InputProps={{
                endAdornment: (<AccountCircle />)
              }}
            />
            <TextField sx={{ marginTop: "10px" }} fullWidth id="standard-basic" label="Edit Number" variant="standard"
              InputProps={{
                endAdornment: (<PhoneEnabledIcon />)
              }}
            />
            <TableRow>
             <List>
             <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Address" />
                {openAddress ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openAddress} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <TextField fullWidth id="standard-basic" label="Pincode" variant="standard" />
                    <TextField sx={{ marginLeft: "10px" }} fullWidth id="standard-basic" label="City/Distict/Town" variant="standard" />
                    <TextField sx={{ marginLeft: "10px" }} fullWidth id="standard-basic" label="state" variant="standard" />
                  </ListItemButton>
                  <ListItemText sx={{ pl: 4 }}>
                  <TextField sx={{ marginTop: "10px" }} fullWidth id="standard-basic" label="Home Address (Area and Street)" variant="standard" />
                  <TextField sx={{ marginTop: "10px" }} fullWidth id="standard-basic" label="LandMark" variant="standard" />
                  </ListItemText>
                </List>
              </Collapse>
             </List>
            </TableRow>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{ marginTop: "20px" }}
              >
                <FormLabel id="demo-row-radio-buttons-group-label" sx={{ marginTop: "10px" }}>Gender <HowToRegSharpIcon sx={{ position: "relative", top: "5px" }} /></FormLabel>
                <FormControlLabel sx={{ marginTop: "40px" }} value="female" control={<Radio />} label="Female" />
                <FormControlLabel sx={{ marginTop: "40px" }} value="male" control={<Radio />} label="Male" />
                <FormControlLabel sx={{ marginTop: "40px" }} value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
            {/* <TextField fullWidth id="standard-basic" label="Edit City" variant="standard"
              InputProps={{
                endAdornment: (<LocationCityIcon />)
              }}
            />
            <TextField sx={{ marginTop: "20px" }} fullWidth id="standard-basic" label="Edit State" variant="standard"
              InputProps={{
                endAdornment: (<HomeWorkSharpIcon />)
              }}
            /> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='error' onClick={handleClose}>Cancle</Button>
          <Button variant='contained' color='primary' onClick={handleClose}>Update</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
