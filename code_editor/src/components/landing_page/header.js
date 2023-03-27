import Logo from "./logo"
import { useNavigate } from "react-router-dom";

const useRedirect = () => {
  const navigate = useNavigate();
  const redirect = (path) => {
    navigate('../'+path);
  };
  return redirect;
};

const Header = () => {
  const redirect = useRedirect();

  return(
    <header className="header">
      <Logo/>
      <h1>CODE&lt;IT&gt;</h1>
      <div>
        <button className="login" onClick={()=>redirect("login")}>Login</button>
        <button className="register"><a href="../register" className="register" onClick={()=>redirect("register ")}>Register</a></button>
      </div>
    </header>
  )
}

export default Header