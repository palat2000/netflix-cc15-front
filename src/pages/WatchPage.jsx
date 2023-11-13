import { useEffect, useRef, useState } from "react";
import { endWatching, startWatching } from "../store/utils/contentApi";
import { useDispatch } from "react-redux";
import axios from "../config/axios";
import { isOnWatchPage, setRecentTime } from "../store/slice/watchPageSlice";
import React from 'react';

function WatchPage() {

  const watchPlayer = useRef(null)
  const [video, setVideo] = useState(null)
  const dispatch = useDispatch()

  useEffect(
    () => {
      startWatching(1).then(res => setVideo(res))
      dispatch(isOnWatchPage())
    }
    , []
  )

  const loadRecentWatching = () => {
    console.dir(watchPlayer.current)
    console.log(video?.videoData?.history[0]?.recentWatching)
    watchPlayer.current.currentTime = video?.videoData?.history[0]?.recentWatching
  }

  // const handleOnPause = () => {
  //   const recentWatch = watchPlayer.current.currentTime
  //   endWatching(1, recentWatch)
  // }

  // const handleOnEnded = () => {
  //   console.log('first')
  //   endWatching(1, 0)
  // }

  // onEnded={handleOnEnded} onPause={handleOnPause}

  const updateTime = () => {
    dispatch(setRecentTime(watchPlayer?.current?.currentTime))
  }

  // componentWillUnmount() {
  //   alert('The component is going to be unmounted');
  // };

  return (
    <>
      <div className=" w-screen h-screen bg-black flex items-center ">
        {video && <video onTimeUpdate={updateTime} onLoadStart={loadRecentWatching} controls disablePictureInPicture preload="true" autoPlay ref={watchPlayer} className="w-full h-full object-contain">
          <source src={video?.videoData?.videoUrl}></source>
        </video>}
      </div >
    </>
  )
}

export default WatchPage;
