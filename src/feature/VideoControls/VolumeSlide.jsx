import { useEffect, useState } from "react"
import ValueVolume from "./ValueVolume"
import SetSoundHighButton from "../../components/Button/SetSoundHighButton"
import SetSoundLowButton from "../../components/Button/SetSoundLowButton"
import SetSoundOffButton from "../../components/Button/SetSoundOffButton"

export default function VolumeSlide({ watchPlayer }) {
    const [volume, setVolume] = useState(1)
    const [open, setIsOpen] = useState(false)

    useEffect(
        () => {
            watchPlayer.current.volume = volume
        }, [volume]
    )

    const changeVolume = (el) => {
        setVolume(el.target.value)
    }

    const mouseEnter = () => {
        setTimeout(() => setIsOpen(true), 200)
    }
    const mouseLeave = () => {
        setTimeout(() => setIsOpen(false), 200)
    }

    return (
        <div className="bg-neutral flex justify-center items-center relative">
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                {volume > 0.5 && <SetSoundHighButton />}
                {(volume < 0.5 && volume != 0) && <SetSoundLowButton />}
                {volume == 0 && <SetSoundOffButton />}
            </div>
            {open && <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="rotate-[-90deg] absolute z-50 bottom-[100px] flex justify-center items-center bg-neutral-800 w-[150px] h-[20px] rounded-sm shadow-xl">
                <div className="flex items-center w-[80%] h-[40%] bg-neutral-500 relative">
                    <input onChange={changeVolume} type="range" min={0} max={1} step="any" className="w-full h-full absolute    "></input>
                    <ValueVolume volume={volume} />
                </div>
            </div>}
        </div>
    )
}
