import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const blueTheme = createTheme({
  palette:{
    primary: {
      main:'#00568c'
    },
    secondary: {
      main:'#049fff'
    },
    error: {
      main: red.A400
    }
  }
})