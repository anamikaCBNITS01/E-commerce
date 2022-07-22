import { Button, Input, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styles from './style.module.css'
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const SearchBar = () => {
  return (
    <div>
      <div className={styles.SearchDiv}>
        <div className={styles.SearchDiv1}>
          <input className={styles.SearchBar} placeholder="Search here..." type="search" />
        </div>
        <div>
          <button className={styles.searchBtn}><SearchIcon sx={{ height: "20px" }} />Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar