import images from "./images";
import { useState } from "react";
import React from "react";

function UnoptimizedSlider() {
  const [selected, setSelected] = useState(0);

  function handlePrevious() {
    setSelected(selected > 0 ? selected - 1 : images.length - 1);
  }

  function handleNext() {
    setSelected(selected < images.length - 1 ? selected + 1 : 0);
  }

  return (
    <div className="">
      <h1>Image sliders</h1>
      <div className="border border-yellow rounded-lg mt-10">
        <div className="flex justify-center items-center m-8">
          <button onClick={handlePrevious} className="px-4 py-2 mx-5">
            previous
          </button>
          {/* {images.map((url, i) => ( */}
          <div>
            <img
              src={images[selected]}
              className={"w-64 h-40"}
              alt="image slider demo"
            ></img>
          </div>
          {/* ))} */}
          <button onClick={handleNext} className="px-8 py-2 mx-5">
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default UnoptimizedSlider;

/*
--UNOPTIMAL SOLUTION--

This is an unoptimized approach because if you run the project and open the console > go to the network tab and see on each click there is a network call being made to the images component

This can lead to performance issues therefore we should always minimize the network calls to the backend
*/
