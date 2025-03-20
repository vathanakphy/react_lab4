import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [imgNo,setImgNo] = useState(0);
  /* You will need to hanle the click on left and right button */
  function goLeft(e){
    e.preventDefault();
    setImgNo(imgNo-1);
  }
  function goRight(e){
    e.preventDefault();
    setImgNo(imgNo+1);
  }
  /* You will need to manage the cases when we are on the last image or first image*/
  function manageImgAccess(){
    if(imgNo === images.length-1){
      setImgNo(0);
    }else if(imgNo === -1){
      setImgNo(images.length-1);
    }
   }
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={goLeft} className="arrow arrow-left" />

      {/* YOu will need to display the current image, not the first one.. */
        manageImgAccess(imgNo)
      }
      <img src={images[imgNo].src} alt={images[imgNo].alt} className="slide" />

      <BsArrowRightCircleFill onClick={goRight} className="arrow arrow-right" />
    </div>
  );
};
