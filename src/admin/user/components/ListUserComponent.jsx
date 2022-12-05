import * as React from 'react';

import { Button, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../../store/slices/user/userSlice.js';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Nombre', width: 130 },
  { field: 'last_name', headerName: 'Apellido', width: 150 },
  { field: 'company', headerName: 'Empresa', width: 160, },
  { field: 'email', headerName: 'Correo Electrónico', width: 200, },
];


export const ListUserComponent = () => {
  const [pageSize, setPageSize] = React.useState(5);

  const dispatch = useDispatch()

  const { list:users } = useSelector( (state)=> state.users )

  const [deleteIds, setDeleteIds] = React.useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = () => {

    dispatch( removeUser(deleteIds) )

    setOpen(false);
  };

  const changeCheckBoxesSelection = (ids) => {
    setDeleteIds(ids)
  }


  return (
    <Grid container>
      {/*<DialogConfirmDelete open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>*/}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirmar eliminación."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Estas seguro de eliminar los usuarios?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>Cancelar</Button>
            <Button color="error"  onClick={handleRemove} >
              Eliminar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Grid item xs={6}>
        <Typography variant={'h5'}>
          Lista de usuarios
        </Typography>
      </Grid>
      {
        !!deleteIds.length &&
          <Button variant="outlined" color="error" onClick={handleClickOpen}>
            Eliminar { deleteIds.length } usuarios
          </Button>
      }
      <Grid item xs={12} sx={{ mt: 2, p: 1 }}>
        <div style={{ height: 475, width: '100%' }}>
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            onSelectionModelChange={changeCheckBoxesSelection}
          />
        </div>

      </Grid>
    </Grid>
  );
}
