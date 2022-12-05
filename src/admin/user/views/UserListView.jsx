import { AdminLaout } from '../../layout/AdminLaout.jsx';
import { FormUserComponent, ListUserComponent } from '../components';
import { BreadcrumbsComponent } from '../components/BreadcrumbsComponent.jsx';
import { breadcrumbsListUser } from '../components';
import { BoxLayout } from '../../layout/BoxLayout.jsx';


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
