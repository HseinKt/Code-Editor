const register = ()=>{
  return(
    <div className="reg-container">
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <div className="register-form">
        <div className="name-container">
            <div>
              <label htmlFor="first_name">First Name</label>
              <input type="text" id="first_name" placeholder="First Name" />
            </div>
            <div>
              <label htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name" placeholder="Last Name" />
            </div>
          </div>
          <div>
            <label htmlFor="email">Enter your Email</label>
            <input id="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="username">Choose a Username</label>
            <input id="username" placeholder="Username" />
          </div>
          <div>
            <label htmlFor="password">Enter your Password</label>
            <input id="password" type="password" placeholder="Password" />
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm your Password</label>
            <input id="confirm_password" type="password" placeholder="Confirm Password" />
            </div>
          <div>
            <label htmlFor="birth_date">Date of Birth</label>
            <input type="date" id="birth_date"/>
          </div>
          <div id="gender" className="gender">
            <div>
              <label htmlFor="male">Male</label>
              <input type="radio" id="male" value="male" />
            </div>
            <div>
            <label htmlFor="female">Female</label>
            <input type="radio" id="female" value="female" />
            </div>
          </div>
          <button type="submit" className="register-button" id="register-button">Register</button>
          <div className="register-link">
            Already registered? <a href="">Login Now</a>
          </div>
        </div>
      </div>
  </div>

  )
}

export default register