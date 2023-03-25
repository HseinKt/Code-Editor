import Adminheader from "../../components/admin_header";
import AdminSidebar from "../../components/admin_sidebar";
import UsersTable from "../../components/users_table";
const HomePage = () => {
  return (
    <body>
      <Adminheader />
      <div class="container2">
        <AdminSidebar />
        <div class="content">
          <h1 class="content-title" id="content-title">
            Users
          </h1>

          <UsersTable />
        </div>
      </div>
    </body>
  );
};

export default HomePage;
