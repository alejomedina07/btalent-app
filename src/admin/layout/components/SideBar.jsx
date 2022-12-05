import {
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography
} from '@mui/material';
import { navItems } from './_navItems.jsx';
import { NavBarItem } from './nav/NavBarItem.jsx';
import { useDispatch } from 'react-redux';

export const SideBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch()
  return (
    <Box component={'nav'} sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>

      <Drawer variant='permanent' open// temporary
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
        >
        <Toolbar>
          <Typography variant={'h6'} noWrap component={'div'}>
            Nombre de usuario
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
