import { useSelector } from 'react-redux';
import {
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography
} from '@mui/material';

import { navItems } from './nav/_navItems.jsx';
import { NavBarItem } from './nav/NavBarItem.jsx';

import reactLogo from '../../../assets/react.svg'


export const SideBar = ({ drawerWidth = 240 }) => {

  const { userConnected } = useSelector( (state)=> state.auth )

  return (
    <Box component={'nav'} sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>

      <Drawer variant='permanent' open// TODO temporary
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
        >
        <img className="logo react" src={reactLogo} alt="" />

        <Toolbar>
          <Typography variant={'h5'} noWrap component={'div'}>
            Hola: { userConnected.user }
          </Typography>
        </Toolbar>
        <Divider/>
        <List>
          {
            navItems.map( option =>  (
              <NavBarItem key={option.id}  option={option} />
            ))
          }
        </List>
      </Drawer>
    </Box>
  );
}
