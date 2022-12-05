import { useDispatch } from 'react-redux';
import { Grid, TextField, Button } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout.jsx';
import { useForm } from '../../hooks/useForm.js';
import { login } from '../../store/slices/auth/authSlice.js';

export const Login = () => {

  const dispatch = useDispatch()

  const { user, password, onInputChange } = useForm({
    user: '',
    password: ''
  })

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch( login({ user }) )
  }

  return (
    <>
      <AuthLayout title="Login!">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Usuario"
                type="text"
                required={true}
                placeholder="Usuario"
                name="user"
                value={ user }
                onChange={ onInputChange }
                fullWidth />

            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                name="password"
                required={true}
                value={ password }
                onChange={ onInputChange }
                fullWidth />
            </Grid>
            <Grid container spacing={ 2 } sx={{ mb:2, mt:2}}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button type='submit' variant="contained" fullWidth> Iniciar sesión </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
}
