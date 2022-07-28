import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';

import cat1 from '../../assets/cat1.jpg'
import cat2 from '../../assets/cat2.jpeg'
import cat3 from '../../assets/cat3.jpg';
import cat4 from '../../assets/cat4.jpg'
import cat5 from '../../assets/cat5.jpg'
import cat6 from '../../assets/cat6.png';
import styles from './style.module.css';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const CategoryNav = () => {
  return (
    <div className={styles.CategoryNav}>
        <div>
        <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Item>
                                <Box>
                                    <img className={styles.Images} src={cat1} alt='loading...'/><br/>
                                    <button className={styles.buttons}><Link className={styles.link} to="/home-and-kicthen">Home & Kitchen</Link></button>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs>
                            <Item>
                                <Box>
                                    <img className={styles.Images} src={cat2} alt='loading...'/><br/>
                                    <button className={styles.buttons}><Link className={styles.link} to="/furniture">Furniture</Link></button>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs>
                            <Item>
                                <Box>
                                    <img className={styles.Images} src={cat3} alt='loading...'/><br/>
                                    <button className={styles.buttons}>Sports & Fitness</button>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs>
                            <Item>
                                <Box>
                                    <img className={styles.Images} src={cat4} alt='loading...'/><br/>
                                    <button className={styles.buttons}>Bags, Wallets & Luggage</button>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs>
                            <Item>
                            <Box>
                                    <img className={styles.Images} src={cat5} alt='loading...'/><br/>
                                    <button  className={styles.buttons}>Scientific Supplies</button>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs>
                            <Item>
                            <Box>
                                    <img className={styles.Images} src={cat6} alt='loading...'/><br/>
                                    <button  className={styles.buttons}>Home & Electronics</button>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
        </div>
    </div>
  )
}

export default CategoryNav