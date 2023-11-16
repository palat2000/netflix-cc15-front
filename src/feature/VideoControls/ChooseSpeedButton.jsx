import { useEffect, useState } from "react"

export default function ChooseSpeedButton({ handleOnClick, value, speed }) {
    const [choose, setChoose] = useState(false)

    useEffect(
        () => {
            if (value === speed) {
                setChoose(true)
            } else {
                alert('qqqqqqqq')
            }
        }
        , [speed]
    )

    return (
        <>
            {choose ?
                <div className="w-[30px] h-[30px] rounded-full border-2 border-neutral-300 flex justify-center items-center" >
                    <div className="bg-white w-[80%] h-[80%] rounded-full"></div>
                </div>
                :
                <button onClick={handleOnClick} value={value} className="bg-white w-[15px] h-[15px] rounded-full"></button>
            }
            <div>{value}x</div>
        </>
    )
}
