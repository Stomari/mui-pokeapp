import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { StyledLink } from './styles';

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <StyledLink to={'/'}>
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </StyledLink>
              <StyledLink to={'/about'}>
                <MenuItem onClick={handleClose}>About</MenuItem>
              </StyledLink>
            </Menu>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PokeApp
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </>
  );
};
