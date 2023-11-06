// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import PlayerControls from "../watchPagePlayer/playerControls";
import { useEffect, useRef, useState } from "react";

function WatchPage() {
  // const { movieId } = useParams()

  const watchPlayer = useRef(null)

  const [currentTime, setCurrentTime] = useState(null)
  const [displayControls, setDisplayControls] = useState(false)

  // const showControls = () => {
  //   setDisplayControls(true)
  // }

  // const hideControls = () => {
  //   setDisplayControls(false)
  // }

  useEffect(
    () => console.log(currentTime)
    , [currentTime]
  )

  return (
    <>
      <div className=" w-screen h-screen bg-black flex items-center ">
        <PlayerControls watchPlayer={watchPlayer} currentTime={currentTime} />
        <video onTimeUpdate={el => setCurrentTime(el.target.currentTime)} ref={watchPlayer} className="w-full h-full object-contain">
          <source src={"https://res.cloudinary.com/diyiw4pvv/video/upload/v1698595931/horror/ifx8p6t58uo958x6g5dz.mp4"}></source>
        </video>
      </div>
    </>
  )
}

export default WatchPage;
