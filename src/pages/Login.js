import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userAuthContext from "../context/AuthUser";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const Login = () => {
  const { setAuth } = useContext(userAuthContext);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess(true);
  };

  return (
    <>
      <ErrorBoundary>
        {success ? (
          <section>
            <h3 className="success">
              You are logged in as, <span className="user-span">{user}</span>.
            </h3>
            <br />
            <p>
              <Link to="/">Continue Browsing</Link>
            </p>
          </section>
        ) : (
          <div className="login">
            <form className="form-field" onSubmit={handleSubmit}>
              <label>Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter Username"
                autoComplete="off"
                autoCapitalize="words"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <label>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <button className="login-btn">Sign In</button>
            </form>
          </div>
        )}
      </ErrorBoundary>
    </>
  );
};
export default Login;
