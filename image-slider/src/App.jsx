import React from "react";
import "./App.css";
import UnoptimizedSlider from "./unoptimizedSlider";
import OptimizedSlider from "./OptimizedSlider";
import SliderWithAutoScroll from "./SliderWithAutoScroll";

function App() {
  return (
    <div>
      <UnoptimizedSlider></UnoptimizedSlider>
      <OptimizedSlider></OptimizedSlider>
      <SliderWithAutoScroll></SliderWithAutoScroll>
    </div>
  );
}

export default App;
