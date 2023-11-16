import React, { useEffect, useState } from 'react'
import ChooseSpeedButton from './ChooseSpeedButton'
import SpeedButton from '../../components/Button/SpeedButton'

export default function SetSpeedVideo({ watchPlayer }) {

    const [speed, setSpeed] = useState(1)
    const [open, setIsOpen] = useState(false)

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

    const mouseEnter = () => {
        setTimeout(() => setIsOpen(true), 200)
    }
    const mouseLeave = () => {
        setTimeout(() => setIsOpen(false), 200)
    }

    const speedValueArr = [0.5, 0.75, 1, 1.25, 1.5]

    return (
        <div >
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <SpeedButton />
            </div>
            {open && <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className='flex flex-row justify-center items-center w-[500px] h-[120px] gap-[3%] bg-neutral-800 absolute bottom-[50px] right-0 z-30'>
                <div className='font-semibold text-lg absolute top-4 left-4'>Playback Speed</div>
                <div className='bg-neutral-500 w-[90%] h-[1%] top-[59%] absolute'></div>
                <div className='absolute bottom-1 flex flex-row justify-between items-end w-[110%] h-[100%] '>
                    {speedValueArr.map((el, index) => <ChooseSpeedButton key={index} handleOnClick={handleOnClick} value={el} speed={speed} />)}
                </div>
            </div>}
        </div>
    )
}
