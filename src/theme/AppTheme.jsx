import { CssBaseline, ThemeProvider } from '@mui/material';
import { blueTheme } from './';
// import { purpleTheme } from './purpleTheme.js';

export const AppTheme = ( { children } ) => {
  return (
    // <ThemeProvider theme={purpleTheme}>
    <ThemeProvider theme={blueTheme}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
}
