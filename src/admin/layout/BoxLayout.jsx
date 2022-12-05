import { Grid, Typography } from '@mui/material';

export const BoxLayout = ({ children, title }) => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="row"
      alignItems="start"
      justifyContent="center"
      sx={{ minHeight: '100%', padding:3, backgroundColor: 'white',  borderRadius: 2 }}
      className="box-shadow"
    >
      <Grid item xs={12}>
        <Typography variant={'h5'}>
          { title }
        </Typography>
        { children }
      </Grid>


      {/*<Grid item*/}
      {/*      className="box-shadow"*/}
      {/*      xs={10}*/}
      {/*      sx={{ width: { sm:450 }, backgroundColor: 'white', padding: 3, borderRadius: 2 }}>*/}


      {/*</Grid>*/}
    </Grid>
  );
}
