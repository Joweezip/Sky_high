import RedirectButton from "./button.jsx";
import "../Styles/VideoTwo.css";
export default function VideoTwo() {
  return (
    <div className="Bg_container2">
      <video
        src="src\assets\seattle_at_night.mp4"
        autoPlay
        muted
        loop
        className="video"
      ></video>
      <h1 className="Title2">Seattle City</h1>
      <h5 className="SubTitle2">Drone Filiming CO</h5>
      <div className="RedirectButtonWrapper2">
        <RedirectButton link="/"></RedirectButton>
      </div>
    </div>
  );
}
