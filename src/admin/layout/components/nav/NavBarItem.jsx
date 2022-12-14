import { Link } from 'react-router-dom';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export const NavBarItem = ( { option } ) => {
  return (
    <Link  to={ option.link } className='link-nav-bar'>
      <ListItem key={option.id} disablePadding >
        <ListItemButton>
          <ListItemIcon>
            { option.icon }
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={option.name}/>
          </Grid>
        </ListItemButton>
      </ListItem>
    </Link>
  );
}
