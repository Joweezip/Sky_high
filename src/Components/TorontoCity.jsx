import React from "react";
import ReactDOM from "react-dom/client";
import '../Styles/TorontoCity.css'
export default function Toronto() {
  return (
    <>
      <div className="title">
        <h1>Toronto City</h1>
      </div>
      
      <img src="src\assets\Toronto_img2.jpeg" alt="" className="Image2" />

    </>
  );
}

ReactDOM.createRoot(document.getElementById("root2")).render(
  <React.StrictMode>
    <Toronto />
  </React.StrictMode>
);

