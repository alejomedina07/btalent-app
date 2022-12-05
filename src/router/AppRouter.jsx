import { useSelector } from 'react-redux';

import { AdminRoutes } from '../admin/routes/AdminRoutes.jsx';
import { AuthRoutes } from '../auth/routes/AuthRoutes.jsx';


export const AppRouter = () => {

  const { authenticated } = useSelector( (state)=> state.auth )

  return (
    <>
      { (authenticated) ? <AdminRoutes/> : <AuthRoutes/> }
    </>
  );
}