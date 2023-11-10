import { useState } from "react"
import AddToListButton from "../components/button/AddToListButton"
import HoverPlayButton from "../components/button/HoverPlayButton"
import { useNavigate } from "react-router-dom"

export default function MovieLikeThisBox({ movie }) {
    const [play, setPlay] = useState(false)
    const navigate = useNavigate()

    const handleOnMouseEnter = () => {
        setPlay(true)
    }
    const handleOnMouseOut = () => {
        setPlay(false)
    }

    return (
        <div className="w-[32%] h-full rounded-md overflow-hidden cursor-pointer" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseOut} onClick={() => navigate(`/watch/${1}`)}>
            <div className="w-full h-[45%] relative">
                <img src={movie?.image} className="w-full h-full object-cover"></img>
                {play && <div className="w-full h-full absolute flex justify-center items-center top-0">
                    <HoverPlayButton />
                </div>}
            </div>
            <div className="flex flex-col w-full h-full bg-neutral-800 min-h-[120px] break-all p-[3%] gap-3">
                <div className="flex items-end justify-between">
                    <h1 className=" text-neutral-400 font-medium">{movie?.release_year}</h1>
                    <AddToListButton />
                </div>
                <div className="text-neutral-400 text-xs">{movie?.detail}</div>
            </div>
        </div>
    )
}
