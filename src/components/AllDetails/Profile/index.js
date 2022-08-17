import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import profile from '../../../assets/profile.jpg'
import {Link} from 'react-router-dom'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ProfilePage() {
  const [userDetail,setUserDetail]=React.useState('')

  const data = window.localStorage.getItem("userDetails");
  // console.log("data",data.parseInt(data))
    React.useEffect(()=>{
      
    },[])

  return (
    <Card sx={{ maxWidth: "50%",textAlign:"center",marginLeft:"25rem",marginTop:"50px",height:"60vh" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <img style={{width:"110px",height:"110px"}} src={profile} alt="loading...."/>
        </Typography>
        <Typography variant="h5" component="div">
          <h3>Name : UserName</h3>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <p>Email : user@gmail.com</p>
          <p>Phone Number : 1234567890</p>
        </Typography>
        <Typography variant="body2">
          <p>Address : Abc colony Bhopal</p>
          <br />
        </Typography>
      </CardContent>
      <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Box><Button variant='contained' sx={{backgroundColor:"#03353e",color:"white",marginLeft:"15px"}} size="small"><Link style={{color:"white",textDecoration:"none"}} to='/editProfile'>Edit</Link></Button></Box>
            <Box><Button variant='contained' sx={{backgroundColor:"#03353e",color:"white",marginRight:"20px"}} size="small">Save</Button></Box>
        </Box>
    </Card>
  );
}
