import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setVideoDuration } from "../../store/slice/watchPageSlice";

export default function VideoControls({ videoContainer, watchPlayer }) {
    const dispatch = useDispatch()
    const recentWatching = useSelector(store => store?.watchPage?.videoData?.recentWatching)
    const [newCurrentTime, setNewCurrentTime] = useState(0)


    // console.dir(watchPlayer.current)
    console.log(recentWatching)

    useEffect(
        () => {
            watchPlayer.current.currentTime = newCurrentTime
        }, [newCurrentTime]
    )

    const changeCurrentTime = (el) => {
        setNewCurrentTime(el.target.value)
    }

    // const [videoDuration, setVideoDuration] = useState(null);

    // useEffect(() => {
    //     if (watchPlayer.current) {
    //         watchPlayer.current.addEventListener("loadedmetadata", () => {
    //             const duration = Math.floor(watchPlayer.current.duration / 60);
    //             setVideoDuration(isNaN(duration) ? null : duration);
    //         });
    //     }
    // }, []);

    // useEffect(
    //     () => {
    //         dispatch(setVideoDuration(watchPlayer?.current?.duration))
    //     }
    // )

    return (
        <div className="absolute z-10 w-full h-full flex flex-col text-white justify-between items-center gap-7">
            <div id="top" className="flex w-full flex-row justify-between h-[10%] items-center">
                <Link to={`/browse`}>
                    <div>Return</div>
                </Link>
            </div>
            <div id="bottom" className="flex flex-col w-full h-[13%]">
                <div className="flex flex-row w-full">
                    {recentWatching && (<input className="w-full" type="range" onChange={changeCurrentTime} value={recentWatching} min="0" max={watchPlayer?.current?.duration} step="any" />)}
                    <div>{watchPlayer?.current?.duration}</div>
                </div>
                <div id="bottom-under" className="flex w-full flex-row justify-between h-full items-center">
                    <div id="bottom-left" className="flex gap-3">
                        <div className="cursor-pointer" onClick={() => watchPlayer.current.play()}>Play</div>
                        <div className="cursor-pointer" onClick={() => watchPlayer.current.pause()}>Pause</div>
                        <div className="cursor-pointer" >Back10</div>
                        <div>Forward10</div>
                        <div>Volume</div>
                    </div>
                    <div id="bottom-center" className="flex gap-3">
                        <div>Title</div>
                    </div>
                    <div id="bottom-right" className="flex gap-3">
                        <div>All Ep.</div>
                        <div>Next Ep.</div>
                        <div>Speed</div>
                        <div className="cursor-pointer" onClick={() => videoContainer.current.requestFullscreen()}>Full</div>
                        <div className="cursor-pointer" onClick={() => document.exitFullscreen()}>ExitFull</div>
                    </div>
                </div>
            </div>
        </div>)
}
