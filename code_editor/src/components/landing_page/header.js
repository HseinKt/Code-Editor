import Logo from "./logo"
import { redirect, useNavigate } from "react-router-dom";

const useRedirect = () => {
  const navigate = useNavigate();
  const redirect = (path) => {
    navigate('../'+path);
  };
  return redirect;
};


const Header = () => {
  const token = localStorage.getItem("token");

  const redirect = useRedirect();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    redirect("login");
  } 
  if (token) {
    return(
      <header className="header">
      <Logo/>
      <h1>CODE&lt;IT&gt;</h1>
      <div>
        <button className="logout" onClick=
        {()=>handleLogout()}>Logout</button>
      </div>
    </header>
    )
  } else {

  return(
    <header className="header">
      <Logo/>
      <h1>CODE&lt;IT&gt;</h1>
      <div>
        <button className="login" onClick={()=>redirect("login")}>Login</button>
        <button className="register" onClick={()=>redirect("register")}>Register</button>
      </div>
    </header>
  )
}
}
export default Header