// app/admin/dashboard/page.js
import PrivateRoute from '../../../components/PrivateRoute';

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, admin!</p>
    </div>
  );
}
export default AdminDashboard
// export default PrivateRoute(AdminDashboard, ['admin']);
