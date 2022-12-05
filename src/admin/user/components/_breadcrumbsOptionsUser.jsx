import HomeIcon from '@mui/icons-material/Home.js';
import GroupIcon from '@mui/icons-material/Group.js';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';

export const breadcrumbsListUser = [
  {
    id: 1, text: 'Inicio', link: '/user-list',
    icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  },
  {
    id: 2, text: 'Usuarios', link: '/user-form',
    icon: <GroupIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  },
  {
    id: 3, text: 'Lista de usuarios',
    icon: <FormatListNumberedRtlIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  },
]

export const breadcrumbsFormUser = [
  {
    id: 1, text: 'Inicio', link: '/user-list',
    icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  },
  {
    id: 2, text: 'Usuarios', link: '/user-form',
    icon: <GroupIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  },
  {
    id: 3, text: 'Creación de usuarios',
    icon: <PersonAddIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  },
]