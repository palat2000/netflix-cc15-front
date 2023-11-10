import { useDispatch, useSelector } from "react-redux"
import AddToListButton from "../components/button/AddToListButton"
import LikeButton from "../components/button/LikeButton"
import PlayButton from "../components/button/PlayButton"
import { useNavigate } from "react-router-dom"
import { editMylist } from "../store/utils/contentApi"
import { editMyListAction } from "../store/slice/myListSlice"

export default function TrailerLayoutLeft({ movieId }) {

    const movieTitle = useSelector(state => state?.content?.data?.movie[0]?.title)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    return (
        <div className='z-10 w-5/12 flex flex-col gap-3'>
            <h1 className='text-4xl font-semibold'>
                {movieTitle}
            </h1>
            <div className='flex items-center gap-1'>
                <div onClick={() => navigate(`/watch/1`)}>
                    <PlayButton />
                </div>
                <div className='flex'>
                    <div onClick={() => dispatch(editMyListAction(movieId))}>
                        <AddToListButton />
                    </div>
                    <div>
                        <LikeButton />
                    </div>
                </div>
            </div>
        </div>
    )
}
