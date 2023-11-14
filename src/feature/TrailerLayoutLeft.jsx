import { useSelector } from "react-redux"
import LikeButton from "../components/Button/NeverLikeButton"
import PlayButton from "../components/button/PlayButton"
import { useNavigate } from "react-router-dom"
import MyListButton from "./MyListButton"
import { editLike } from "../store/utils/contentApi"
import LikeFeatureButton from "./LikeFeatureButton"

export default function TrailerLayoutLeft({ movieId }) {

    const movieTitle = useSelector(state => state?.content?.data?.movie[0]?.title)
    const movieIsInMyListData = useSelector(state => state?.content?.data?.movie?.inMyListHistory)
    const movieIsInLikeData = useSelector(state => state?.content?.data?.movie?.likeHistory)
    console.log("🚀 ~ file: TrailerLayoutLeft.jsx:14 ~ TrailerLayoutLeft ~ movieIsInLikeData:", movieIsInLikeData)

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
                <div className='flex gap-1'>
                    <MyListButton movieId={movieId} movieIsInMyListData={movieIsInMyListData} />
                    <LikeFeatureButton movieId={movieId} movieIsInLikeData={movieIsInLikeData} />
                </div>
            </div>
        </div>
    )
}
