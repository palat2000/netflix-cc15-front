import React, { useEffect, useState } from 'react'
import ChooseSpeedButton from './ChooseSpeedButton'

export default function SetSpeedVideo({ watchPlayer }) {

    const [speed, setSpeed] = useState(1)
    // const [choose, setChoose] = useState(false)

    useEffect(
        () => {
            watchPlayer.current.playbackRate = speed
            console.log("🚀 ~ file: SetSpeedVideo.jsx:10 ~ SetSpeedVideo ~ speed:", speed)
        }, [speed]
    )

    const handleOnClick = (el) => {
        el.preventDefault()
        setSpeed(el.target.value)
    }

    return (
        <div className='relative'>
            <div>SetSpeedVideo</div>
            <div className='flex  flex-row justify-center items-center gap-[3%] bg-neutral-600 w-[200px] h-[100px] absolute bottom-[50px] right-[70px] z-30'>
                {/* <input type='checkbox' value={0.5} />
                <input type='checkbox' value={0.75} />
                <input type='checkbox' value={1} />
                <input type='checkbox' value={1.25} />
                <input type='checkbox' value={1.5} /> */}
                {/* <button onClick={handleOnClick} className={`bg-red-300 ${()}`} value={0.5}>sdsdsd</button> */}
                <button onClick={handleOnClick} className='bg-red-300 ' value={1}>1</button>
                <ChooseSpeedButton handleOnClick={handleOnClick} />
            </div>
        </div>
    )
}
