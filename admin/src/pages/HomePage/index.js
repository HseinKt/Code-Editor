import Adminheader from "../../components/admin_header";
import AdminSidebar from "../../components/admin_sidebar";
import UsersTable from "../../components/users_table";
import UseHttp from "../../../../admin/src/hooks/http-hook";
import {useEffect, useState} from 'react';

const HomePage = () => {
  
  return (
    <body>
      <Adminheader />
      <div className="container2">
        <AdminSidebar />
        <div className="content">
          <h1 className="content-title" id="content-title">
            Users
          </h1>
          <UsersTable/>
        </div>
      </div>
    </body>
  );
};

export default HomePage;
