import { Button, Card, CardActions, CardContent, CardHeader, Collapse, FormControl, FormControlLabel, FormLabel, List, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup, TableRow, TextField } from '@mui/material'
import React from 'react'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HowToRegSharpIcon from '@mui/icons-material/HowToRegSharp';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const EditProfile = () => {
    const [openAddress, setOpenAddress] = React.useState(true);

  const handleClick = () => {
    setOpenAddress(!openAddress);
  };
  return (
    <div>
        <Card
      >
        <CardHeader>{"Update Your Profile"}</CardHeader>
        <CardContent>
          <CardContent id="alert-dialog-slide-description">
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
          </CardContent>
        </CardContent>
        <CardActions>
          <Button variant='contained' color='error' >Cancle</Button>
          <Button variant='contained' color='primary' >Update</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default EditProfile
