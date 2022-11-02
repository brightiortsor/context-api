import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HomeImg from "../images/home-img.gif";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>user Authentication</title>
        <meta
          name="description"
          content="Test fake user authentication with react context api"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="home-cont">
        <h1>Welcome, Agba Coder.</h1>
        <p className="home-p">
          Navigate to
          <Link to="/users" className="btn">
            Users
          </Link>
          to test Fake User Authentication
        </p>
        <div className="home-img">
          <img src={HomeImg} alt="" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
