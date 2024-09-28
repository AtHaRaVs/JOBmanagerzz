import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> App
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eum
            vero nobis temporibus et amet, suscipit aliquam iste debitis
            laudantium sapiente rem recusandae ipsa dignissimos, odio asperiores
            similique ab fugit.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
