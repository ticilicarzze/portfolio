import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "../../images";
import "./index.css";
import Slider from "../Slider";

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
      <Slider />
    </div>
  );
};

export default Work;
