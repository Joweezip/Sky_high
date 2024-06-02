import RedirectButton from "./button";
import "../Styles/VideoOne.css";
export default function VideoOne() {
  return (
    <>
      <video
        src="src\assets\toronto_drone.mp4"
        autoPlay
        muted
        loop
        className="video"
      ></video>
      <h1 className="Title">Toronto City</h1>
      <h5 className="SubTitle">Drone Filiming CO</h5>
      <div className="RedirectButtonWrapper">
        <RedirectButton link="https://www.toronto.ca/"></RedirectButton>
      </div>
    </>
  );
}
