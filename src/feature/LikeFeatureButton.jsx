import { editLike } from "../store/utils/contentApi"
import { useState } from "react"
import NeverLikeButton from "../components/Button/NeverLikeButton"
import IsLikeButton from "../components/Button/IsLikeButton"

export default function LikeFeatureButton({ movieId, movieIsInLikeData }) {

    // const movieIsInLikeData = useSelector(state => state?.content?.data?.movie?.inLikeHistory)
    const [movieIsInLike, setMovieIsInLike] = useState(movieIsInLikeData)

    return (
        movieIsInLike ?
            (<div onClick={() => editLike(movieId).then(res =>
                setMovieIsInLike(res.likeData)
            )
            } >
                <IsLikeButton />
            </div >)
            :
            (<div onClick={() => editLike(movieId).then(res =>
                setMovieIsInLike(res.likeData)
            )}>
                <NeverLikeButton />
            </div>
            )
    )
}
