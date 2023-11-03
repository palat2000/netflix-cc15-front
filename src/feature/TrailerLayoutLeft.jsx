import { useSelector } from "react-redux"
import AddToListButton from "../components/button/AddToListButton"
import LikeButton from "../components/button/LikeButton"
import PlayButton from "../components/button/PlayButton"

export default function TrailerLayoutLeft({ movieId }) {

    const movieTitle = useSelector(state => state?.content[movieId]?.data?.movie[0]?.title)

    return (
        <div className='z-10 w-5/12 flex flex-col gap-3'>
            <h1 className='text-4xl font-semibold'>
                {movieTitle}
            </h1>
            <div className='flex items-center gap-1'>
                <PlayButton />
                <div className='flex'>
                    <AddToListButton />
                    <LikeButton />
                </div>
            </div>
        </div>
    )
}
