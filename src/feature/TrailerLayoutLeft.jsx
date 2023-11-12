import { useDispatch, useSelector } from "react-redux"
import AddToListButton from "../components/button/AddToListButton"
import LikeButton from "../components/button/LikeButton"
import PlayButton from "../components/button/PlayButton"
import { useNavigate } from "react-router-dom"
import { editMylist, getMyListById } from "../store/utils/contentApi"
import { editMyListAction } from "../store/slice/myListSlice"
import IsInMyListButton from "../components/Button/IsInMyListButton"
import { useEffect, useState } from "react"
import { fetchContentAction } from "../store/slice/contentSlice"

export default function TrailerLayoutLeft({ movieId }) {

    const movieTitle = useSelector(state => state?.content?.data?.movie[0]?.title)
    const movieIsInMyListData = useSelector(state => state?.content?.data?.movie?.inMyListHistory)
    console.log("🚀 ~ file: TrailerLayoutLeft.jsx:14 ~ TrailerLayoutLeft ~ movieIsInMyList:", movieIsInMyListData)

    const [movieIsInMyList, setMovieIsInMyList] = useState(movieIsInMyListData)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(
        () => {
            getMyListById(movieId).then(res => setMovieIsInMyList(res.isInMyList))
        }, []
    )

    return (
        <div className='z-10 w-5/12 flex flex-col gap-3'>
            <h1 className='text-4xl font-semibold'>
                {movieTitle}
            </h1>
            <div className='flex items-center gap-1'>
                <div onClick={() => navigate(`/watch/1`)}>
                    <PlayButton />
                </div>
                <div className='flex gap-1'>
                    {movieIsInMyList ?
                        <div onClick={() => editMylist(movieId).then(res => setMovieIsInMyList(res.movieAddtoList))}>
                            <IsInMyListButton />
                        </div>
                        :
                        <div onClick={() => editMylist(movieId).then(res => setMovieIsInMyList(res.movieAddtoList))}>
                            <AddToListButton />
                        </div>}
                    <div>
                        <LikeButton />
                    </div>
                </div>
            </div>
        </div>
    )
}
