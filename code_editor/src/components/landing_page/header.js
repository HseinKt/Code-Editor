import Logo from "./logo"
const header =()=>{
  return(
    <header className="header">
      <Logo/>
      <h1>CODE&lt;IT&gt;</h1>
      <div>
        <button className="login">Login</button>
        <button className="register" >Register</button>
      </div>
    </header>
  )
}

export default header