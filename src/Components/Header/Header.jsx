import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const LogoImage = styled('img')({
  height: '40px', 
  marginRight: 'auto',
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
});

export default function Navbar() {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <LogoImage
          src="https://pbs.twimg.com/profile_images/1675097424631672834/_3dHW7UW_400x400.jpg"
          alt="Logo"
        />
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
}
