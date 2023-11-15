import { useEffect, useRef, useState } from "react";
import { endWatching, startWatching } from "../store/utils/contentApi";
import { useDispatch, useSelector } from "react-redux";
import { isOnWatchPage, setRecentBuffer, setRecentWatching, setVideoDuration, setVideoId } from "../store/slice/watchPageSlice";
import { useLocation } from "react-router-dom";
import VideoControls from "../feature/VideoControls/VideoControls";

function WatchPage() {
  const watchPlayer = useRef(null)
  const videoContainer = useRef(null)
  const [video, setVideo] = useState(null)
  const dispatch = useDispatch()
  const location = useLocation()
  const videoId = 1

  useEffect(
    () => {
      startWatching(videoId).then(res => setVideo(res))
      dispatch(isOnWatchPage(location.pathname))
      dispatch(setVideoId(videoId))
    }
    , []
  )

  const loadRecentWatching = async () => {
    // console.dir(watchPlayer.current)
    // dispatch(setVideoDuration(watchPlayer?.current?.duration))
    watchPlayer.current.currentTime = await video?.videoData?.history[0]?.recentWatching
  }

  const handleOnChange = () => {
    const recentWatch = watchPlayer.current.currentTime
    endWatching({ videoId: videoId, recentWatching: recentWatch })
  }

  const handleOnEnded = () => {
    endWatching({ videoId: videoId, recentWatching: 0 })
  }

  const watchVideoData = useSelector(store => store.watchPage)

  const updateTime = () => {
    dispatch(setVideoDuration(watchPlayer?.current?.duration))
    dispatch(setRecentWatching(watchPlayer?.current?.currentTime))
    const recentBuffer = watchPlayer?.current?.buffered?.end(watchPlayer?.current?.buferred?.length - 1)
    dispatch(setRecentBuffer(recentBuffer))
  }

  return (
    <>
      <div ref={videoContainer} className="w-screen h-screen bg-black flex items-center relative ">
        {video && (
          <>
            <VideoControls videoContainer={videoContainer} watchPlayer={watchPlayer} />
            <video onSeeking={handleOnChange} onTimeUpdate={updateTime} onEnded={handleOnEnded} onPause={handleOnChange} onLoadStart={loadRecentWatching} preload="true" autoPlay ref={watchPlayer} className="w-full h-full object-contain">
              <source src="https://res.cloudinary.com/dsldd3uhx/video/upload/v1698560049/qyjwotzxlymma0cyw6e0.mp4"></source>
              {/* <source src={video?.videoData?.videoUrl}></source> */}
            </video>
          </>
        )
        }
      </div >
    </>
  )
}

export default WatchPage;
