import GroupIcon from '@mui/icons-material/Group.js';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const navItems = [
  {
    id:1, name: 'Crear usuario',
    link:'/user-form', icon: <PersonAddIcon/>
  },
  {
    id:2, name: 'Lista de usuarios',
    link:'/user-list', icon: <GroupIcon/>
  },

]