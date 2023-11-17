import { useEffect, useRef, useState } from "react";
import { endWatching, startWatching } from "../store/utils/contentApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoAction, isOnWatchPage, setRecentBuffer, setRecentWatching, setVideoDuration, setVideoId } from "../store/slice/watchPageSlice";
import { useLocation, useParams } from "react-router-dom";
import VideoControls from "../feature/VideoControls/VideoControls";

function WatchPage() {
  const watchPlayer = useRef(null)
  const videoContainer = useRef(null)
  const [video, setVideo] = useState(null)
  const dispatch = useDispatch()
  const location = useLocation()
  const { videoId } = useParams()


  useEffect(
    () => {
      dispatch(setVideoId(videoId))
      startWatching(videoId).then(res => setVideo(res))
      dispatch(fetchVideoAction(videoId))
      dispatch(isOnWatchPage(location.pathname))
    }
    , []
  )

  const loadRecentWatching = async () => {
    watchPlayer.current.currentTime = await video?.videoData?.history[0]?.recentWatching
  }

  const handleOnChange = () => {
    const recentWatch = watchPlayer.current.currentTime
    endWatching({ videoId: videoId, recentWatching: recentWatch })
  }

  const handleOnEnded = () => {
    endWatching({ videoId: videoId, recentWatching: 0 })
  }

  const videoData = useSelector(store => store?.watchPage?.videoData?.fetchData?.videoData)
  console.log("🚀 ~ file: WatchPage.jsx:41 ~ WatchPage ~ vidoUrl:", videoData)

  const updateTime = () => {
    dispatch(setVideoDuration(watchPlayer?.current?.duration))
    dispatch(setRecentWatching(watchPlayer?.current?.currentTime))
    const recentBuffer = watchPlayer?.current?.buffered?.end(watchPlayer?.current?.buferred?.length - 1)
    dispatch(setRecentBuffer(recentBuffer))
  }

  return (
    <>
      <div ref={videoContainer} className="w-screen h-screen bg-black flex items-center fixed">
        {(videoData) && (
          <>
            && <VideoControls videoContainer={videoContainer} watchPlayer={watchPlayer} />
            <video onSeeking={handleOnChange} onTimeUpdate={updateTime} onEnded={handleOnEnded} onPause={handleOnChange} onLoadStart={loadRecentWatching} preload="true" autoPlay ref={watchPlayer} className="w-full h-full object-contain">
              <source src={videoData?.videoUrl}></source>
            </video>
          </>
        )
        }
      </div >
    </>
  )
}

export default WatchPage;
