import React from "react";
import ReactDOM from "react-dom/client";
import "../Styles/TorontoCity.css";
import Header from "./header";
import "../Styles/VideoOne.css";

export default function Toronto() {
  return (
    <>
      <video
        src="src\assets\toronto_drone.mp4"
        autoPlay
        muted
        loop
        className="video"
      ></video>
      <h1 className="title">Toronto City</h1>
        <p className="parag">
          Toronto, Canadas largest city, dazzles with its iconic CN Tower,
          multicultural neighborhoods, and vibrant arts scene. Known for its
          diverse culinary delights and dynamic festivals like TIFF, the city
          seamlessly blends urban sophistication with cultural richness, making
          it an exciting destination for all.
        </p>
        <img src="src\assets\khalid billboard.jpeg" alt="" className="Image1"/>
      <Header></Header>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root2")).render(
  <React.StrictMode>
    <Toronto />
  </React.StrictMode>
);
