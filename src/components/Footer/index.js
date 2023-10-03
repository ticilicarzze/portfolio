import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='media-container'>
        <a
          href='https://www.linkedin.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedin} color='#FF8A00' />
        </a>
        <a
          href='https://github.com/ticilicarzze/BaSP-M2023'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} color='#FF8A00' />
        </a>

        <a
          href='https://www.facebook.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faFacebook} color='#FF8A00' />
        </a>

        <a
          href='https://www.instagram.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faInstagram} color='#FF8A00' />
        </a>
      </div>
      <p>Ticiano Licarzze © 2023</p>
    </div>
  );
};

export default Footer;
