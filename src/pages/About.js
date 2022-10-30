import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="home">
      <div className="home-cont">
        <h1>About this Assignment</h1>

        <h2>Question III</h2>
        <p>
          Setup react-router, implement Nested routes, 404 page, and Error
          boundary. Set up fake userAuthContext using the context API to always
          carry out a fake authentication, bonus - extract out a custom hook to
          get the currently logged-in user. Implement SEO and Navigation menu
          that will show on each page.
        </p>
        <div className="about-btn">
          <Link to="/" className="btn">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
