import { useEffect, useState } from "react"

export default function ChooseSpeedButton({ handleOnClick, value, speed }) {
    const [choose, setChoose] = useState(false)
    console.log(value)

    useEffect(
        () => {
            if (value === speed) {
                setChoose(true)
            } else {
                setChoose(false)
            }
        }
        , [speed]
    )

    return (
        <div className="w-[20%] h-[60%] flex flex-col justify-center items-center">
            <div className="h-[70%] flex items-center justify-center">
                {choose ?
                    <div className="w-[30px] h-[30px] rounded-full border-2 bg-neutral-800 border-neutral-300 flex justify-center items-center" >
                        <div className="bg-white w-[60%] h-[60%] rounded-full"></div>
                    </div>
                    :
                    <button onClick={handleOnClick} value={value} className="bg-white w-[15px] h-[15px] rounded-full"></button>
                }
            </div>
            <div className={`${choose && "font-semibold"}`}>{`${value}x ${(value === 1 ? "Normal" : "")}`}</div>
        </div>
    )
}
