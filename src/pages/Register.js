import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="home">
      <div className="home-cont">
        <div className="login">
          <h2 className="header">Create Account</h2>
          <form className="form-field">
            <label htmlFor="fname">Full Name</label>
            <input type="text" placeholder="enter full name" />

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="example@mail.com" />

            <label htmlFor="phone">Phone</label>
            <input type="tel" placeholder="2348033334444" />

            <label htmlFor="password">Choose Password</label>
            <input type="password" placeholder="**********" />

            <label htmlFor="password">Confirm Password</label>
            <input type="password" placeholder="**********" />

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
