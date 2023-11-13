import { useEffect, useRef, useState } from "react";
import { startWatching } from "../store/utils/contentApi";

function WatchPage() {

  const watchPlayer = useRef(null)
  const [video, setVideo] = useState(null)

  useEffect(
    () => {
      startWatching(1).then(res => setVideo(res))
    }
    , []
  )

  const loadRecentWatching = () => {
    console.dir(watchPlayer.current)
    console.log(video?.videoData?.history[0]?.recentWatching)
    watchPlayer.current.currentTime = video?.videoData?.history[0]?.recentWatching
  }

  return (
    <>
      <div className=" w-screen h-screen bg-black flex items-center ">
        {video && <video onLoadStart={loadRecentWatching} controls disablePictureInPicture preload="true" autoPlay ref={watchPlayer} className="w-full h-full object-contain">
          <source src={video?.videoData?.videoUrl}></source>
        </video>}
      </div>
    </>
  )
}

export default WatchPage;
