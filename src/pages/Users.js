import { Link } from "react-router-dom";
import Login from "./Login";

const Users = () => {
  return (
    <div className="home">
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
