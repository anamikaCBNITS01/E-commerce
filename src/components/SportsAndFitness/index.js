import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import Slider from '../ImageSlider/ImageSlider'
import styles from './style.module.css'
import bad1 from '../../assets/bad1.jpg'
import waterP from '../../assets/waterP.png'
import mixer from '../../assets/mixer.jpg'
import CategorySidebar from '../CatSidbar';
import poster from '../../assets/saf.jpg';
import dum1 from '../../assets/dum1.jpg';
import exbike1 from '../../assets/exbike1.png'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SAF = () => {
  return (
    <div>
      <div>
        {/* Navbar */}
      </div>
      <div className={styles.FlexBox}>
        <div className={styles.leftside}>
          <CategorySidebar/>
        </div>
        <div className={styles.rightside}>
          <div>
          <div>
            <img className={styles.imagePost} src={poster} alt="wait..."/>
          </div>
          <h1>Sports And Fitness</h1>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <Item>
                    <Box>
                      <img className={styles.Images} src={bad1} alt='loading...' /><br />
                      <button className={styles.buttons}><Link to="/chairs">Dadminton</Link></button>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs>
                  <Item>
                    <Box>
                      <img className={styles.Images} src={dum1} alt='loading...' /><br />
                      <button className={styles.buttons}><Link to="/tables">Dumbbells</Link></button>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs>
                  <Item>
                    <Box>
                      <img className={styles.Images} src={exbike1} alt='loading...' /><br />
                      <button className={styles.buttons}><Link to="/sofa">Exercise Bike</Link></button>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SAF