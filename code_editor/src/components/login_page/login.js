const login = ()=>{
  return(
    <div class="lgn-container">
      <div class="login-container">
        <h1 class="login-title">Login</h1>
        <div class="login-form">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter your Email"/>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your Username"/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your Password"/>
          <button type="submit" class="login-button" id="login-button">Login</button>
          <p class="forgot-password"><a href="#">Forgot your password?</a></p>
          <p class="register-link">Not registered? <a href="register.html">Register as a new User</a></p>
        </div>
      </div>
    </div>
  )
}
export default login