import { breadcrumbsFormUser, FormUserComponent } from '../components/index.js';
import { AdminLaout } from '../../layout/AdminLaout.jsx';
import { BoxLayout } from '../../layout/BoxLayout.jsx';
import { BreadcrumbsComponent } from '../components/BreadcrumbsComponent.jsx';


export const UserFormView = () => {
  return (
    <AdminLaout>
      <BreadcrumbsComponent options={breadcrumbsFormUser}/>
      <BoxLayout title='Crear usuario'>
        <FormUserComponent />
      </BoxLayout>
    </AdminLaout>
  );
}
