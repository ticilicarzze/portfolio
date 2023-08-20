import "./index.css";
import Port from "../../assets/FOTOPORTADA.png";

const About = () => {
  return (
    <div className='container '>
      <div className='about-page'>
        <img src={Port} alt='About Me' className='img-port' />
        <div className='about-p'>
          <h2>About</h2>
          <p>
            I have knowledge in various areas of digital design, including full
            stack development and app UI/UX.
          </p>
          <p>
            I advocate for creative coding, giving you the confidence to build
            anything imaginable.
          </p>
          <p>
            I'm currently studying Systems Engineering at the UTN (FRRO) in
            Rosario, Argentina.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
