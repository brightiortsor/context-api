import { Link } from "react-router-dom";
import ErrorImg from "../images/error.gif";

const Error = () => {
  return (
    <div className="home">
      <div className="home-cont">
        <h1>Error 404!!!!</h1>
        <h3>Product page does not exist.</h3>

        <div className="error">
          <img src={ErrorImg} alt="" className="error-img" />
        </div>

        <div className="error-btn">
          <Link to="/" className="btn">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
