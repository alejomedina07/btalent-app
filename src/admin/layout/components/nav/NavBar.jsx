import { useDispatch } from 'react-redux';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';

import { logout } from '../../../../store/slices/auth/authSlice.js';

export const NavBar = ({ drawerWidth }) => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch( logout() );
  }
  return (
    <AppBar position="fixed"
            sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${ drawerWidth }px` } }}>
      <Toolbar>
        <IconButton color="inherit" edge='start' sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuOutlined />
        </IconButton>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' noWrap component='div'>Btalent App</Typography>
          <IconButton color='error' onClick={handleLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
