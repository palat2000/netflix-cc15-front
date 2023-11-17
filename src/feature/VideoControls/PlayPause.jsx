import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function PlayAndPause({ watchPlayer }) {
    console.log("🚀 ~ file: PlayPause.jsx:6 ~ PlayAndPause ~ watchPlayer:", watchPlayer)
    const [isPlay, setIsPlay] = useState(false)

    const clickPlay = () => {
        watchPlayer.current.play()
        setIsPlay(false)
    }
    const clickPause = () => {
        watchPlayer.current.pause()
        setIsPlay(true)
    }

    return (
        <div>
            {isPlay ?
                <div onClick={clickPlay}>
                    <FontAwesomeIcon
                        icon={faPlay}
                        className="cursor-pointer text-white text-2xl hover:text-3xl hover:border-neutral-300 duration-75"
                    />
                </div>
                :
                <div className="cursor-pointer" onClick={clickPause}>
                    <FontAwesomeIcon
                        icon={faPause}
                        className="cursor-pointer text-white text-2xl hover:text-3xl hover:border-neutral-300 duration-75"
                    />
                </div>}
        </div>
    )
}
