import { Navigate, Route, Routes } from 'react-router-dom';
import { UserFormView, UserListView } from '../user/views';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/user-list" element={ <UserListView/> } />
      <Route path="/user-form" element={ <UserFormView/> } />
      <Route path="/*" element={ <Navigate to="/user-list"/> } />
    </Routes>
  );
}
