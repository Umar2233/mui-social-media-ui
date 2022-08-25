import { AppBar, Avatar, Badge, InputBase, styled, Toolbar, Typography, Box, Menu, MenuItem } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import React from 'react'
import { Mail, Notifications } from '@mui/icons-material';
import { useState } from 'react';

const Navbar = () => {

  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  })

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
  }))

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: 'flex'
    }
  }))

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: 'none'
    }
  }))

  const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky' >
      <StyledToolBar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }} >
          LAMA DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search><InputBase placeholder='Search....' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' onClick={e => setOpen(true)}  />
        </Icons>
        <UserBox onClick={e => setOpen(true)} >
          <Typography>
            John
          </Typography>
          <Avatar sx={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={e => setOpen(false)} >Profile</MenuItem>
        <MenuItem onClick={e => setOpen(false)} >My account</MenuItem>
        <MenuItem onClick={e => setOpen(false)} >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar