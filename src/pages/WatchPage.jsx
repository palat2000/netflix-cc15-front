// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import PlayerControls from "../watchPagePlayer/playerControls";
import { useEffect, useRef, useState } from "react";
// import './css video/VideoStyle.css'

function WatchPage() {
  // const { movieId } = useParams()

  const watchPlayer = useRef(null)

  const [currentTime, setCurrentTime] = useState(null)
  const [displayControls, setDisplayControls] = useState(true)

  const showControls = () => {
    setTimeout(() => setDisplayControls(true), 1000)
  }

  const hideControls = () => {
    setTimeout(() => setDisplayControls(false), 1000)
  }

  useEffect(
    () => {
      console.log(currentTime)

    }
    , [currentTime]
  )

  return (
    <>
      <div onMouseMove={showControls} className=" w-screen h-screen bg-black flex items-center ">
        <PlayerControls displayControls={displayControls} watchPlayer={watchPlayer} currentTime={currentTime} setCurrentTime={setCurrentTime} />
        <video onPlay={hideControls} onPause={showControls} disablePictureInPicture preload autoPlay onTimeUpdate={el => setCurrentTime(el.target.currentTime)} ref={watchPlayer} className="w-full h-full object-contain">
          <source src={"https://res.cloudinary.com/dsldd3uhx/video/upload/v1698560049/qyjwotzxlymma0cyw6e0.mp4"}></source>
        </video>
      </div>
    </>
  )
}

export default WatchPage;
