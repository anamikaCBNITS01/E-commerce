import { Box, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import fan from '../../assets/fan1.png'

const MyOrder = () => {
    const navigate = useNavigate();

  const Navigation=()=>{
    navigate('/trackOrder')
  }

  return (
    <div>
         <Card sx={{ display: 'flex', marginTop: 5, marginLeft: "20px", marginRight: "30px" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={fan}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="p">
                      7200mAh Battery Powered Oscillating Fan, 8 Rechargeable Foldaway Fan, 12H Working Time, Height Adjustment, 4 Speeds, Remote Control, Portable Standing Fan for RV, Travel, Camping, Desk, Home, Outdoor
                      </Typography>
                      <Typography>
                      </Typography>
                      {/* <Typography>
                        <Chip sx={{fontWeight:"bold"}} variant='contained' color="success" label={`Price : ${element.price}`}/>
                      </Typography> */}
                     
                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                          <Box><button style={{backgroundColor:"#ff7f50",marginRight:"10px",color:"white",width:"100px",height:"40px",border:"none",cursor:"pointer"}} onClick={Navigation}>Track Order</button></Box>
                        </Box>
                     
                    </CardContent>
                  </Box>
                </Card>
    </div>
  )
}

export default MyOrder