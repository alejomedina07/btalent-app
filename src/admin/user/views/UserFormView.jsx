import { BreadcrumbsComponent, breadcrumbsFormUser, FormUserComponent } from '../components';
import { AdminLaout, BoxLayout } from '../../layout';

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
