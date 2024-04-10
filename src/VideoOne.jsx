
import RedirectButton from "./button"
import "./VideoOne.css"
export default function VideoOne(){
    return(
        
        <div className="Bg_container">
        <video src="src\assets\toronto_drone.mp4" autoPlay muted loop className="video"></video>
        <h1 className="Title">SKY HEIGHTS</h1>
          <h5 className="SubTitle">Drone Filiming CO</h5>
         <div className="RedirectButtonWrapper">
  <RedirectButton></RedirectButton>
         </div>
        </div>
    )
}