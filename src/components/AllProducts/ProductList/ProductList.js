import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts= async ()=>{
        let result = await fetch('http://localhost:3000/user/products');
        result=await result.json();
        setProducts(result);       
    }
    console.warn("products",products)
  return (
    <div>
      <h1>Products</h1>
      
      <Table>
        <TableHead>
            <TableCell>S.No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Company</TableCell>
        </TableHead>
        {
            products.map((item,index)=>{
               return(
                <TableBody>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.company}</TableCell>
                </TableBody>
               )
            })
        }
      </Table>

    </div>
  )
}

export default ProductList
