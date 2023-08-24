// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import images from "../../images";
// import "./index.css";

// const Work = () => {
//   const boxRef = useRef(null);

//   const handleMouseEnter = (event) => {
//     const item = event.target.closest(".item");
//     const image = item.querySelector("img");
//     image.style.opacity = "0.3"; // Cambia el valor según tus preferencias
//     image.style.border = "2px solid #FF8A00";
//   };

//   const handleMouseLeave = (event) => {
//     const item = event.target.closest(".item");
//     const image = item.querySelector("img");
//     image.style.opacity = "1";
//     image.style.border = "none";
//   };

//   return (
//     <div className='container'>
//       <div className='carousel' ref={boxRef}>
//         <motion.div
//           className='inner-carousel'
//           drag='x'
//           dragConstraints={boxRef}
//           whileTap={{ cursor: "grabbing" }}
//         >
//           {images.map((image) => {
//             return (
//               <motion.div className='item' key={image}>
//                 <img src={image} alt='project' />
//                 <a
//                   href='https://www.leagueofgraphs.com/es/summoner/las/ticileproso#championsData-soloqueue'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='know-more'
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   Know more
//                 </a>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Work;

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "../../images";
import "./index.css";

const Work = () => {
  const boxRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleDragStart = () => {
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleImageClick = (e) => {
    if (dragging) {
      e.preventDefault();
    }
  };

  return (
    <div className='container'>
      <div className='carousel' ref={boxRef}>
        <motion.div
          className='inner-carousel'
          drag='x'
          dragConstraints={boxRef}
          whileTap={{ cursor: "grabbing" }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {images.map((image) => {
            return (
              <motion.div className='item' key={image}>
                <img
                  src={image}
                  alt='project'
                  onClick={handleImageClick}
                  draggable
                  data-draggable={!dragging}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
