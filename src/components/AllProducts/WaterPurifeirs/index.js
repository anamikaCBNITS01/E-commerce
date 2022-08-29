import React from 'react'
import CategorySidebar from '../../AllDetails/CategorySidbar'
import styles from './style.module.css'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { WaterPurifiers } from '../../AllData/AllData';

import { Button, CardActions, Chip } from '@mui/material';
const WaterPurifeirs = () => {
  const theme = useTheme();

  return (
    <div>
      <div className={styles.FlexBox}>
        <div className={styles.leftBox}>
          <CategorySidebar />
        </div>
        <div className={styles.rightBox}>
          <h1>Results</h1>
          {
            WaterPurifiers.map((element, index) => {
              return (
                <Card sx={{ display: 'flex', marginTop: 5, marginLeft: "20px", marginRight: "30px" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 151,paddingLeft:"25px" }}
                    image={element.image}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="p">
                        {element.details}
                      </Typography>
                      <Typography variant='p'>
                        <div>{element.inStock ? <IconButton color="success">In Stock</IconButton> : <IconButton color="error">Out of Stock</IconButton>}</div>
                      </Typography>
                      <Typography>
                        <div className={styles.RatingDiv}>
                        </div><span>{element.rating}</span>
                      </Typography>
                      <Typography>
                        <Chip sx={{fontWeight:"bold"}} variant='contained' color="success" label={`Price : ${element.price}`}/>
                      </Typography>
                     
                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                          <Box><button style={{backgroundColor:"#ff7f50",marginRight:"10px",color:"white",width:"100px",height:"40px",border:"none",cursor:"pointer"}}>Buy Now</button></Box>
                          <Box><button style={{backgroundColor:"#fdd844",color:"white",width:"100px",height:"40px",border:"none",cursor:"pointer"}}>Add To Cart</button></Box>
                        </Box>
                     
                    </CardContent>
                  </Box>
                </Card>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default WaterPurifeirs