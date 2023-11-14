import { useEffect, useState } from "react"
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PlayerControls({ watchPlayer, currentTime, displayControls }) {

    console.log(watchPlayer)

    const [newCurrentTime, setNewCurrentTime] = useState(0)
    const [play, setPlay] = useState(true)

    useEffect(
        () => {
            watchPlayer.current.currentTime = newCurrentTime
        }, [newCurrentTime]
    )

    const changeCurrentTime = (el) => {
        setNewCurrentTime(el.target.value)
    }

    const clickPlay = () => {
        watchPlayer?.current?.play()
        setPlay(true)
    }

    const clickPause = () => {
        watchPlayer?.current?.pause()
        setPlay(false)
    }

    return (
        displayControls && <div className="text-white gap-8 absolute z-10 flex flex-col justify-between items-center h-full w-full ">
            <div></div>
            <div className=" w-full flex flex-col">
                <input onChange={changeCurrentTime} value={currentTime} className="w-full" type="range" min="0" max={watchPlayer?.current?.duration} step="any"></input>
                <div className="w-full flex">
                    {play ?
                        <div className="cursor-pointer" onClick={clickPause}>
                            <FontAwesomeIcon icon={faPlay} className="text-3xl text-white hover:text-4xl duration-100" />
                        </div>
                        :
                        <div className=" bg-red-600 cursor-pointer" onClick={clickPlay}>
                            <FontAwesomeIcon icon={faPause} className="text-3xl text-white hover:text-4xl duration-100" />
                        </div>
                    }
                    <div className="bg-red-600 cursor-pointer" onClick={() => watchPlayer?.current?.webkitEnterFullscreen()}>
                        fullScreen
                    </div>
                </div>
            </div>
        </div>
    )
}
