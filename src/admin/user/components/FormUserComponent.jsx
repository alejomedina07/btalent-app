import { useDispatch } from 'react-redux';
import { Button, Grid, TextField } from '@mui/material';
import { addUser } from '../../../store/slices/user/userSlice.js';
import { useForm } from '../../../hooks/useForm.js';


export const FormUserComponent = () => {

  const dispatch = useDispatch()
  const { name, last_name, company, email, onInputChange } = useForm({
    name: '',
    last_name: '',
    company:'',
    email: ''
  })

  const submit = ( event )=> {
    event.preventDefault();
    dispatch( addUser({  id:Date.now(), name, last_name, company, email }) )
  }
  return (
    <form onSubmit={submit}>
      <Grid container>

        <Grid item xs={12} sm={6} sx={{ mt: 2, p: 1 }}>
          <TextField
            label="Nombre"
            required={true}
            type="text"
            placeholder="Nombre Completo"
            name="name"
            value={name}
            onChange={onInputChange}
            fullWidth />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ mt: 2, p: 1 }}>
          <TextField
            name="last_name"
            label="Apellidos"
            required={true}
            type="text"
            placeholder="Apellidos"
            value={last_name}
            onChange={onInputChange}
            fullWidth />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ mt: 2, p: 1 }}>
          <TextField
            label="Empresa"
            required={true}
            type="text"
            name="company"
            placeholder="Empresa"
            value={company}
            onChange={onInputChange}
            fullWidth />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ mt: 2, p: 1 }}>
          <TextField
            label="Correo"
            required={true}
            type="email"
            name="email"
            placeholder="ejemplo@ejemplo.com"
            value={email}
            onChange={onInputChange}
            fullWidth />
        </Grid>
        <Grid container spacing={ 2 } sx={{ mb:2, mt:2}}>
          <Grid item xs={ 12 } sm={ 6 }>
            <Button type={'submit'} variant="contained" fullWidth> Crear Usuario </Button>
          </Grid>
        </Grid>

      </Grid>
    </form>
  );
}
