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
        setSpeed(+el.target.value)
    }

    const speedValueArr = [0.5, 0.75, 1, 1.25, 1.5]

    return (
        <div className='relative'>
            <div>SetSpeedVideo</div>
            <div className='flex flex-row justify-center items-center w-[300px] h-[100px] gap-[3%] bg-neutral-600 absolute bottom-[50px] right-[70px] z-30'>
                {/* <input type='checkbox' value={0.5} />
                <input type='checkbox' value={0.75} />
                <input type='checkbox' value={1} />
                <input type='checkbox' value={1.25} />
                <input type='checkbox' value={1.5} /> */}
                {/* <button onClick={handleOnClick} className={`bg-red-300 ${()}`} value={0.5}>sdsdsd</button> */}
                {/* <button onClick={handleOnClick} className='bg-red-300 ' value={1}>1</button> */}
                {speedValueArr.map((el, index) => <ChooseSpeedButton key={index} handleOnClick={handleOnClick} value={el} speed={speed} />)}
            </div>
        </div>
    )
}
