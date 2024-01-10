import React, { useEffect } from "react";
import images from "./images";
import { useState } from "react";

function SliderWithAutoScroll() {
  let [isActiveImageIndex, setIsActiveImageIndex] = useState(0);

  const handleNextClick = () => {
    setIsActiveImageIndex((isActiveImageIndex + 1) % images.length);
  };

  const handlePreviousClick = () => {
    setIsActiveImageIndex(
      !isActiveImageIndex ? images.length - 1 : isActiveImageIndex - 1
    );
  };

  //AUTO-SCROLL
  useEffect(() => {
    setTimeout(() => {
      handleNextClick();
    }, 2000);
  }, [isActiveImageIndex]);

  return (
    <div className="border border-red rounded-lg mt-10">
      <div className="flex justify-center items-center">
        <button className="px-8 mx-5" onClick={handlePreviousClick}>
          Previous
        </button>
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            className={
              "w-[400px] h-[300px] object-contain " +
              (isActiveImageIndex == i ? "block" : "hidden")
            }
          ></img>
        ))}

        <button className="px-8 mx-5" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default SliderWithAutoScroll;

/*
This is an OPTIMAL solution as it doesn not need to make a call to the images component to get the image, it will render all the images in the dom and just "Show" or "Hide" the images accordingly
*/
