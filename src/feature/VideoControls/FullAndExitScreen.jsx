import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompress, faExpand, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function FullAndExitScreen({ videoContainer }) {
    const [isFull, setIsFull] = useState(false)

    const clickFull = () => {
        videoContainer.current.requestFullscreen()
        setIsFull(false)
    }
    const clickExit = () => {
        document.exitFullscreen()
        setIsFull(true)
    }

    return (
        <div>
            {isFull ?
                <div onClick={clickFull}>
                    <FontAwesomeIcon
                        icon={faExpand}
                        className="cursor-pointer text-white text-2xl hover:text-3xl hover:border-neutral-300 duration-75"
                    />
                </div>
                :
                <div className="cursor-pointer" onClick={clickExit}>
                    <FontAwesomeIcon
                        icon={faCompress}
                        className="cursor-pointer text-white text-2xl hover:text-3xl hover:border-neutral-300 duration-75"
                    />
                </div>}
        </div>
    )
}
