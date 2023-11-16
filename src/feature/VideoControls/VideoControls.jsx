import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setVideoDuration } from "../../store/slice/watchPageSlice";
import './VideoControls.css'
import TimeProgress from "./TimeProgress";
import VolumeSlide from "./VolumeSlide";
import SetSpeedVideo from "./SetSpeedVideo";

export default function VideoControls({ videoContainer, watchPlayer }) {
    const dispatch = useDispatch()
    const recentWatching = useSelector(store => store?.watchPage?.videoData?.recentWatching)

    const handleBackward = () => {
        watchPlayer.current.currentTime = recentWatching - 10
    }

    const handleForward = () => {
        watchPlayer.current.currentTime = recentWatching + 10
    }

    return (
        <div className="absolute z-10 w-full h-full flex flex-col text-white justify-between items-center gap-7">
            <div id="top" className="flex w-full flex-row justify-between h-[10%] items-center">
                <Link to={`/browse`}>
                    <div>Return</div>
                </Link>
            </div>
            <div id="bottom" className="flex flex-col w-full h-[13%]">
                <TimeProgress watchPlayer={watchPlayer} />
                <div id="bottom-under" className="flex w-full flex-row justify-between h-full items-center">
                    <div id="bottom-left" className="flex gap-3">
                        <div className="cursor-pointer" onClick={() => watchPlayer.current.play()}>Play</div>
                        <div className="cursor-pointer" onClick={() => watchPlayer.current.pause()}>Pause</div>
                        <div className="cursor-pointer" onClick={handleBackward}>Back10</div>
                        <div className="cursor-pointer" onClick={handleForward}>Forward10</div>
                        <VolumeSlide watchPlayer={watchPlayer} />
                    </div>
                    <div id="bottom-center" className="flex gap-3">
                        <div>Title</div>
                    </div>
                    <div id="bottom-right" className="flex gap-3">
                        <div>All Ep.</div>
                        <div>Next Ep.</div>
                        <SetSpeedVideo watchPlayer={watchPlayer} />
                        <div className="cursor-pointer" onClick={() => videoContainer.current.requestFullscreen()}>Full</div>
                        <div className="cursor-pointer" onClick={() => document.exitFullscreen()}>ExitFull</div>
                    </div>
                </div>
            </div>
        </div>)
}
