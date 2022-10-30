const Login = () => {
  return (
    <div className="login">
      <h1>Login Page</h1>
      <form className="form-field">
        <label htmlFor="name">Username</label>
        <input type="text" placeholder="Enter Username" required/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Password" required/>
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
};
export default Login;
