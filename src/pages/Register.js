import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="home">
      <div className="home-cont">
        <div className="login">
          <h1>Create Account</h1>
          <form className="form-field">
            <label htmlFor="fname">Full Name</label>
            <input type="text" placeholder="Enter full name..." />

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Example@mail.com" />

            <label htmlFor="phone">Phone</label>
            <input type="tel" placeholder="2348033334444" />

            <label htmlFor="password">Choose Password</label>
            <input type="password" placeholder="Choose password..." />

            <button className="login-btn">Register</button>
          </form>
          <div className="login-div">
            Have an Account?
            <Link to="/users" className="login-link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
