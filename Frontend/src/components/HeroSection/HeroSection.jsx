import "../../App.css";
import Button from "../Button/Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {

   return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Welcome to Blogify!</h1>
      <p>Begin your day with a short post...</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          
          <Link to="/all">GET STARTED</Link>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          
        >
        <Link to="/create-post">Write a post</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
