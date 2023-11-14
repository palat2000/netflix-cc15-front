import { useEffect, useRef, useState } from "react";
import { endWatching, startWatching } from "../store/utils/contentApi";
import { useDispatch, useSelector } from "react-redux";
import { isOnWatchPage, setRecentWatching, setVideoId } from "../store/slice/watchPageSlice";
import { useLocation } from "react-router-dom";
// import PlayerControls from "../feature/VideoControls/PlayerControls";
// import { addRecentWatchVideo, getRecentWatchVideo } from "../utils/local-storage";

function WatchPage() {

  const watchPlayer = useRef(null)
  const videoContainer = useRef(null)
  const [video, setVideo] = useState(null)
  const dispatch = useDispatch()
  const location = useLocation()
  const videoId = 1
  // const [currentTime, setCurrentTime] = useState(null)
  // const [displayControls, setDisplayControls] = useState(true)

  useEffect(
    () => {
      startWatching(videoId).then(res => setVideo(res))
      dispatch(isOnWatchPage(location.pathname))
      dispatch(setVideoId(videoId))
    }
    , []
  )

  // const showControls = () => {
  //   setDisplayControls(true)
  // }

  // const hideControls = () => {
  //   setTimeout(() => setDisplayControls(false), 1000)
  // }

  const loadRecentWatching = () => {
    console.dir(watchPlayer.current)
    console.log(video?.videoData?.history[0]?.recentWatching)
    watchPlayer.current.currentTime = video?.videoData?.history[0]?.recentWatching
  }

  const handleOnPause = () => {
    // showControls
    const recentWatch = watchPlayer.current.currentTime
    endWatching({ videoId: videoId, recentWatching: recentWatch })
  }

  const handleOnEnded = () => {
    console.log('first')
    endWatching({ videoId: videoId, recentWatching: 0 })
  }

  const watchVideoData = useSelector(store => store.watchPage)
  console.log(watchVideoData)

  const updateTime = () => {
    dispatch(setRecentWatching(watchPlayer?.current?.currentTime))
  }

  return (
    <>
      <div ref={videoContainer} className=" w-screen h-screen bg-black flex items-center ">
        {video && <video onTimeUpdate={updateTime} onEnded={handleOnEnded} onPause={handleOnPause} onLoadStart={loadRecentWatching} controls disablePictureInPicture preload="true" autoPlay ref={watchPlayer} className="w-full h-full object-contain">
          <source src={video?.videoData?.videoUrl}></source>
        </video>}
      </div >
    </>
  )
}

export default WatchPage;
