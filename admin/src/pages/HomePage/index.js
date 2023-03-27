import Adminheader from "../../components/admin_header";
import AdminSidebar from "../../components/admin_sidebar";
import UsersTable from "../../components/users_table";
import UseHttp from "../../../../admin/src/hooks/http-hook";
import {useEffect, useState} from 'react';

const HomePage = () => {
  const token = localStorage.getItem('token');
  const [data, setData]=useState('')
  useEffect(()=>{
    
    const sendRequest = async ()=>{
      const myData = await UseHttp(
        "admin/list_users",
        "GET","", {Authorization:'bearer' + token} 
      );
      setData(myData.users) 
      console.log(myData)

      // navigate("/login")
    }
    console.log('test')
    sendRequest()
  },[]
  
  )
  
  return (
    <body>
      <Adminheader />
      <div className="container2">
        <AdminSidebar />
        <div className="content">
          <h1 className="content-title" id="content-title">
            Users
          </h1>
          <UsersTable  data = {data}/>
        </div>
      </div>
    </body>
  );
};

export default HomePage;
