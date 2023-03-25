const register = ()=>{
  return(
    <div className="reg-container">
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <div className="register-form">
          <div>
            <label htmlFor="email">Enter your Email</label>
            <input id="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">Enter your password</label>
            <input id="password" type="password" placeholder="Password" />
          </div>
          <div>
            <label htmlFor="confirmpassword">Confirm your password</label>
            <input id="confirmpassword" type="password" placeholder="Confirm Password" />
          </div>
        </div>
      </div>
  </div>

  )
}

export default register