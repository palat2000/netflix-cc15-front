import { useEffect, useState } from "react"
import ValueVolume from "./ValueVolume"

export default function VolumeSlide({ watchPlayer }) {
    const [volume, setVolume] = useState(1)

    useEffect(
        () => {
            watchPlayer.current.volume = volume
        }, [volume]
    )

    const changeVolume = (el) => {
        setVolume(el.target.value)
    }

    return (
        <div className="bg-neutral flex justify-center items-center relative">
            <div>Volume</div>
            <div className="rotate-[-90deg] absolute z-50 bottom-[100px] flex justify-center items-center bg-neutral-800 w-[150px] h-[20px] rounded-sm shadow-xl">
                <div className="flex items-center w-[80%] h-[40%] bg-neutral-500 relative">
                    <input onChange={changeVolume} type="range" min={0} max={1} step="any" className="w-full h-full absolute    "></input>
                    <ValueVolume volume={volume} />
                </div>
            </div>
        </div>
    )
}
