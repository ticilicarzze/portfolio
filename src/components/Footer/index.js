import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='media-container'>
        <FontAwesomeIcon icon={faHome} color='#FF8A00' />
        <FontAwesomeIcon icon={faHome} color='#FF8A00' />
        <FontAwesomeIcon icon={faHome} color='#FF8A00' />
        <FontAwesomeIcon icon={faHome} color='#FF8A00' />
      </div>
      <p>Ticiano Licarzze © 2023</p>
    </div>
  );
};

export default Footer;
