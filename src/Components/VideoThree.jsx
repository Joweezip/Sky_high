import RedirectButton from "./button";
import "../Styles/VideoThree.css";
export default function VideoThree() {
  return (
    <div className="Bg_container2">
      <video
        src="src\assets\nyc_8k.mp4"
        autoPlay
        muted
        loop
        className="video"
      ></video>
      <h1 className="Title3">NYC</h1>
      <h5 className="SubTitle3">Drone Filiming CO</h5>
      <div className="RedirectButtonWrapper3">
        <RedirectButton link="https://www.nyc.gov/"></RedirectButton>
      </div>
    </div>
  );
}
