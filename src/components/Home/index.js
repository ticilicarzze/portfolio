import { Link } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          Hi, I'm <span>Ticiano Licarzze</span>.
          <br />A Web Developer.
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
