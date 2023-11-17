import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ProgressWatching from "./ProgressWatching"
import ProgressBuffer from "./ProgressBuffer"

export default function TimeProgress({ watchPlayer }) {
    const recentWatching = useSelector(store => store?.watchPage?.videoData?.recentWatching) || 0
    const [newCurrentTime, setNewCurrentTime] = useState(0)

    useEffect(
        () => {
            watchPlayer.current.currentTime = newCurrentTime
        }, [newCurrentTime]
    )

    const changeCurrentTime = (el) => {
        setNewCurrentTime(el.target.value)
    }

    const durationDivide60 = String(watchPlayer?.current?.duration / 60).split(".")
    const durationMinute = Number(`${durationDivide60[0]}.${(durationDivide60[1] * 60)}`).toFixed(2)

    return (
        !isNaN(recentWatching) &&
        <div className="flex flex-row w-full justify-between items-center">
            <div className="w-full h-[3px] flex relative justify-start items-center hover:h-[6px] duration-[0.1s] bg-neutral-600">
                <ProgressWatching watchPlayer={watchPlayer} />
                <ProgressBuffer watchPlayer={watchPlayer} />
                <input id="a" onDragEnter={() => console.log(recentWatching)} className="w-full absolute z-20" type="range" onChange={changeCurrentTime} value={recentWatching} min="0" max={watchPlayer?.current?.duration} step="any" />
            </div>
            <div className="w-fit text-[95%] pl-[1%]">{durationMinute}</div>
        </div>

    )
}
