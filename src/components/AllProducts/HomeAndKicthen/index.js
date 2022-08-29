import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'

import styles from './HomeKitchen.module.css'
import fan from '../../../assets/fans.jpg'
import waterP from '../../../assets/waterP.png'
import mixer from '../../../assets/mixer.jpg'
import CategorySidebar from '../../AllDetails/CategorySidbar';
import poster from '../../../assets/homeKitchenPoster.jpg'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomeAndKicthen = () => {
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
          <h1>Kitchen & home appliances</h1>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <Item>
                    <Box>
                      <img className={styles.Images} src={fan} alt='loading...' /><br />
                      <button className={styles.buttons}><Link to="/fans">Fans</Link></button>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs>
                  <Item>
                    <Box>
                      <img className={styles.Images} src={waterP} alt='loading...' /><br />
                      <button className={styles.buttons}> <Link to="/water_purifeirs">Water purifiers</Link></button>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs>
                  <Item>
                    <Box>
                      <img className={styles.Images} src={mixer} alt='loading...' /><br />
                      <button className={styles.buttons}> <Link to="/mixer">Mixer grinders</Link></button>
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

export default HomeAndKicthen