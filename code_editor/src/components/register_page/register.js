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
            <label htmlFor="username">Choose a username</label>
            <input id="username" placeholder="Username" />
          </div>
          <div>
            <label htmlFor="password">Enter your password</label>
            <input id="password" type="password" placeholder="Password" />
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm your password</label>
            <input id="confirm_password" type="password" placeholder="Confirm Password" />
          </div>
          <div className="name-container">
            <div className="input-wrapper">
              <label htmlFor="first_name">First Name</label>
              <input type="text" id="first_name" placeholder="First Name" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name" placeholder="Last Name" />
            </div>
          </div>
          <div>
            <label htmlFor="birth_date">Enter your birth_date</label>
            <input type="date" id="birth_date"/>
          </div>
          <label htmlFor="gender">Choose your gender</label>
          <div id="gender" className="gender">
            <label htmlFor="male">Male</label>
            <input type="radio" id="male" value="male" />
            <label htmlFor="female">Female</label>
            <input type="radio" id="female" value="female" />
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