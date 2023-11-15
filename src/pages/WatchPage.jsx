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
  const videoIds = 1
  const { videoId } = useParams()
  // const { videoId, movieId } = useParams()
  console.log("🚀 ~ file: WatchPage.jsx:15 ~ WatchPage ~ movieId:", typeof (videoIds))
  // console.log("🚀 ~ file: WatchPage.jsx:15 ~ WatchPage ~ videoId:", videoId)


  useEffect(
    () => {
      startWatching(videoId).then(res => setVideo(res))
      dispatch(fetchVideoAction(1))
      dispatch(isOnWatchPage(location.pathname))
      dispatch(setVideoId(1))
    }
    , []
  )

  const loadRecentWatching = async () => {
    // console.dir(watchPlayer.current)
    // console.log(video?.videoData?.history[0]?.recentWatching)
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

  // const watchVideoData = useSelector(store => store.watchPage.)
  // console.log(watchVideoData)

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
              {/* <source src="https://res.cloudinary.com/dsldd3uhx/video/upload/v1698560049/qyjwotzxlymma0cyw6e0.mp4"></source> */}
              <source src={video?.videoData?.videoUrl}></source>
            </video>
          </>
        )
        }
      </div >
    </>
  )
}

export default WatchPage;
