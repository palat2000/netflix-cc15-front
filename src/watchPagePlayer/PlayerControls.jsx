import { useState } from "react"

export default function PlayerControls({ watchPlayer, currentTime }) {
    // const [displayControls, setDisplayControls] = useState(false)

    // const showControls = () => {
    //     setDisplayControls(true)
    // }

    // const hideControls = () => {
    //     setDisplayControls(false)
    // }

    return (
        <div className="text-white gap-8 absolute z-10 flex justify-center items-center h-full w-full ">
            <div className=" cursor-pointer" onClick={() => watchPlayer?.current?.pause()}>
                pause
            </div>
            <div className=" cursor-pointer" onClick={() => watchPlayer?.current?.play()}>
                play
            </div>
            <div className=" cursor-pointer" onClick={() => watchPlayer?.current?.webkitEnterFullscreen()}>
                fullScreen
            </div>
            <progress min="0" value={currentTime} max={watchPlayer?.current?.duration}></progress>
        </div>
    )
}
