import React from "react";
import ReactDOM from "react-dom";
import '../Styles/TorontoCity.css'
export default function Toronto() {
  return (
    <>
       <div className="BlankBox">
       <h1 className="Title">Toronto City</h1>
       </div>
     
     <div className="SecBlankBox">
     <p>
        Welcome to Toronto! This vibrant city boasts diverse neighborhoods, from
        the historic charm of the Distillery District to the eclectic energy of
        Kensington Market. Dont miss iconic sights like the CN Tower and the
        scenic Harbourfront. Explore multicultural cuisine in neighborhoods like
        Chinatown and Little Italy. With its mix of culture, cuisine, and
        landmarks, Toronto offers an unforgettable experience for every visitor.
      </p>
     </div>
      
      <img className= "Image1" src="src\assets\toront_img1.jpeg" />
      <img src="src\assets\Toronto_img2.jpeg" alt="" className="Image2" />

    </>
  );
}

ReactDOM.createRoot(document.getElementById("root2")).render(
  <React.StrictMode>
    <Toronto />
  </React.StrictMode>
);

