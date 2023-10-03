import React from "react";
import { Link } from "react-scroll";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Port from "../../assets/images/portrait1.jpg";
import { Element } from "react-scroll";

const About = () => {
  return (
    <div>
      <div className='about-page'>
        <div
          className='about-image'
          style={{ backgroundImage: `url(${Port})` }}
        ></div>
        <div className='about-p'>
          <h2>ABOUT ME</h2>
          <p>
            I'm Ticiano, a passionate freelancer from Rosario, Argentina. I have
            knowledge in various areas of digital design, including full stack
            development and app UI/UX. <br />I stand for creative coding, giving
            you the confidence to <span>build anything imaginable</span>.
          </p>
          <p>I'm currently studying Systems Engineering at the UTN (FRRO).</p>
          <Link
            to='skills'
            smooth={true}
            duration={800}
            className='skills-button'
          >
            View my skills
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
      <Element name='skills'>
        <div className='skills-page container'>
          <h2>SKILLS</h2>
          <div className='skills-container'>
            <h3 className='skills-name'>HTML/CSS</h3>
            <p className='skills-text'>
              I aim for performance, simplicity and integrity in my work. I
              write CSS modules and when not working vanilla HTML, solutions
              such as React's JSX are my choice for DOM manipulation.
            </p>
          </div>
          <div className='skills-container'>
            <h3 className='skills-name'>JavaScript</h3>
            <p className='skills-text'>
              I build both small and large scale applications in JavaScript
              daily for desktop, tablet, mobile or server. Combined with an
              in-depth understanding of UX and design means I can take
              applications from start to finish
            </p>
          </div>
          <div className='skills-container'>
            <h3 className='skills-name'>React</h3>
            <p className='skills-text'>
              On the web, I work with both vanilla and framework-based
              applications with strong capabilities in popular
              frameworks/libraries such as React/React Native, Redux
            </p>
          </div>
          <div className='skills-container'>
            <h3 className='skills-name'>Node JS</h3>
            <p className='skills-text'>
              I've worked extensively with Node.js, whether that's in the
              creation of optimized build systems, testing environments, server
              side rendering and multi-user experiences.
            </p>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default About;
