import React from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Button, Chip, Fab, Table, TableBody, TableCell, TableHead } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import product from '../../../assets/chair5.jpg'
import styles from './style.module.css'
const Wishlist = () => {
  return (
    <div>
      <center>
        {/* <h1>Data not found</h1> */}
        <Fab className={styles.Heading} variant="extended">
          {/* <Fab disabled aria-label="like"> */}
            <FavoriteIcon sx={{color:"red",mr:2}} />
          {/* </Fab> */}
          My WishList
        </Fab>
        <Table className={styles.Table}>
          <TableHead className={styles.TableHeading}>
            <TableCell className={styles.TableCell}>Product</TableCell>
            <TableCell className={styles.TableCell}>Product Name</TableCell>
            <TableCell className={styles.TableCell}>Product Price</TableCell>
            <TableCell className={styles.TableCell}>In Stock</TableCell>
            <TableCell className={styles.TableCell}></TableCell>
          </TableHead>
          <TableBody>
            <TableCell>
              <img className={styles.Image} src={product}/>
            </TableCell>
            <TableCell>Chair</TableCell>
            <TableCell>&#8377; 200</TableCell>
            <TableCell> <Chip label="In Stock" color="success" /></TableCell>
            <TableCell><Button className={styles.add}>Add To Cart</Button></TableCell>
          </TableBody>
        </Table>
      </center>
    </div>
  )
}

export default Wishlist