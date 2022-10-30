import { Link } from "react-router-dom";
import HomeImg from "../images/home-img.gif";

const Home = () => {
  return (
    <div className="home">
      <div className="home-cont">
        <h1>Welcome, Agba Coder.</h1>
        <p className="home-p">
          Navigate to
          <Link to="/users" className="btn">
            Users
          </Link>
          to test FakeUserAuthentication
        </p>
        <div className="home-img">
          <img src={HomeImg} alt=""  className="img"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
