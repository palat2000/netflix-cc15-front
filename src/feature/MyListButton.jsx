import IsInMyListButton from "../components/Button/IsInMyListButton"
import AddToListButton from "../components/Button/AddToListButton"
import { editMylist } from "../store/utils/contentApi"
import { useState } from "react"

export default function MyListButton({ movieId, movieIsInMyListData }) {

    // const movieIsInMyListData = useSelector(state => state?.content?.data?.movie?.inMyListHistory)
    const [movieIsInMyList, setMovieIsInMyList] = useState(movieIsInMyListData)

    return (
        movieIsInMyList ?
            (<div onClick={() => editMylist(movieId).then(res => setMovieIsInMyList(res.movieAddtoList))
            } >
                <IsInMyListButton />
            </div >)
            :
            (<div onClick={() => editMylist(movieId).then(res => setMovieIsInMyList(res.movieAddtoList))}>
                <AddToListButton />
            </div>
            )
    )
}
