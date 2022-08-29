import React,{useEffect, useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Avatar, Button } from '@mui/material';
import Login from '../Login/Login'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  getTotals, selectUser } from '../../features/userSlice';
import styles from './style.module.css'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 100),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 100),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const style={
    color:"black",
    background:"  white !important",
    width:"10em",
    height:"50px",
    borderRadius:"25px",
    position:"relative",
    top:"1px",
    fontWeight:"bold",
    boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;"
}
const styleCart={
    color:"black",
    background:"white !important",
    width:"10em",
    marginLeft:"1rem",
    height:"50px",
    borderRadius:"25px",
    position:"relative",
    top:"1px"
}
const siteName={
    background:" white !important",
    color:"black",
    display:"block",
    width:"20%",
    textAlign:"center",
    borderRadius: "15px 50px",
    padding:"0.5rem",
    boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, black 0px 18px 36px -18px inset"
}
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navs() {
    const [open, setOpen] = useState(false);
    // const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    console.log("user==",user)

  useEffect(() => {
    dispatch(getTotals());
  }, [user, dispatch]);
    const {cartTotalQuantity} = useSelector((state)=>state.user)
    // const dispatch=useDispatch();


    const navigate=useNavigate()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogOut=(e)=>{
      e.preventDefault();
    }

    const data = window.localStorage.getItem("userData");
    const signout = () => {
       localStorage.removeItem("userData");
       navigate('/')
       window.location.reload(true)
       
    }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleChange=()=>{
    navigate.push('/profile')
  }

  const handleTwoFun=()=>{
    handleChange();
    handleMenuClose();
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleTwoFun}><Link to={'/profile'}>Profile</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge>
            <LoginIcon />
          </Badge>
        </IconButton>
        <p>Login</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Add to Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#333333"}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            // sx={{ display: { xs: 'none', sm: 'block' } }}
            sx={siteName}
          >
            Shopping Mart
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:"black"}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
            {/* {
              user ?
              <Button sx={style} onClick={(e)=>handleLogOut(e)}>Logout</Button>
              :
              <Button onClick={handleClickOpen} sx={style}>Login</Button>
            } */}
            {/* <Button onClick={handleClickOpen} sx={style}>Login</Button> */}
            {data && data ? <Button onClick={signout} sx={style}>Logout</Button> : !data && <Button sx={style} onClick={handleClickOpen}>Login</Button>}
            <Button onClick={()=>navigate("/Your-shopping-cart")} sx={styleCart}><IconButton><Avatar className={styles.totalProducts}>{cartTotalQuantity}</Avatar><ShoppingCartIcon className={styles.cartIcon} /></IconButton></Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Login open={open} onClose={handleClose} />
    </Box>
  );
}










