import { Link } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Typed from "typed.js";

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          Hi, I'm <span>Ticiano Licarzze</span>.
          <br />A <span ref={el} />.
        </h1>
        <div className='button-container'>
          <Link to='/work' className='flat-button'>
            View my work
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
