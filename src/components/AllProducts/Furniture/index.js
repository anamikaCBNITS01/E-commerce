import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'

import styles from './style.module.css'
import chair1 from '../../../assets/chair1.png'
import waterP from '../../../assets/waterP.png'
import mixer from '../../../assets/mixer.jpg'
import CategorySidebar from '../../AllDetails/CategorySidbar';
import poster from '../../../assets/fur1.jpg';
import tab1 from '../../../assets/tab1.jpg';
import sofa1 from '../../../assets/sofa1.jpg'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Furniture = () => {
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
          <h1>Furnitures</h1>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <Item>
                    <Box>
                      <img className={styles.Images} src={chair1} alt='loading...' /><br />
                      <button className={styles.buttons}><Link to="/chairs">Chairs</Link></button>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs>
                  <Item>
                    <Box>
                      <img className={styles.Images} src={tab1} alt='loading...' /><br />
                      <button className={styles.buttons}><Link to="/tables">Tables</Link></button>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs>
                  <Item>
                    <Box>
                      <img className={styles.Images} src={sofa1} alt='loading...' /><br />
                      <button className={styles.buttons}><Link to="/sofa">Sofa</Link></button>
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

export default Furniture