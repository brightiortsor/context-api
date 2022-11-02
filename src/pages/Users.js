import { Link } from "react-router-dom";
import Login from "./Login";
import { Helmet } from "react-helmet-async";

const Users = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Login page</title>
        <meta name="description" content="Login page to test fake users" />
        <link rel="canonical" href="/users" />
      </Helmet>
      <div className="home-cont">
        <div className="login">{<Login />}</div>
        <div className="login-div">
          Don't Have an Account?
          <Link to="/register" className="login-link">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Users;
