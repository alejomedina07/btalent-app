import { BreadcrumbsComponent, breadcrumbsListUser, FormUserComponent, ListUserComponent } from '../components';
import { AdminLaout, BoxLayout } from '../../layout';


export const UserListView = () => {
  return (
    <AdminLaout>
      <BreadcrumbsComponent options={breadcrumbsListUser}/>
      <BoxLayout title=' '>
        <ListUserComponent />
        <hr/>
        <FormUserComponent/>
      </BoxLayout>
    </AdminLaout>
  );
}
