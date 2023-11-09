import { useSelector } from "react-redux"
import EpisodeBox from "./EpisodeBox"
import MovieLikeThisBox from "./MovieLikeThisBox"

export default function InfoBody({ movieId }) {

    const movieData = useSelector(state => state?.content[movieId]?.data?.movie[0])
    const moreLikeThisData = useSelector(state => state?.content[movieId]?.data?.moreLikeThis)
    const isSerie = movieData?.video
    console.log("🚀 ~ file: InfoBody.jsx:10 ~ InfoBody ~ isSerie:", isSerie)

    console.log(movieData)
    console.log(movieData?.actors)
    console.log(movieData?.video)
    console.log(movieData?.enumGenres)


    return (
        <div className="flex flex-col w-11/12 pt-10 pb-20">
            <div className="flex w-full pb-9">
                <div className="flex flex-col w-3/5 gap-4 ">
                    <div className="flex gap-2 text-neutral-400 text-base font-medium flex-wrap">
                        <div className="break-all">{movieData?.release_year}</div>
                        <div className="break-all">{(isSerie?.length > 1) && `${isSerie?.length}Episodes`}</div>
                    </div>
                    <div className="text-sm w-fullflex break-all">{movieData?.detail}</div>
                </div>
                <div className="flex flex-col w-2/5 gap-[2%]">
                    <div className="text-neutral-500 text-sm flex flex-wrap gap-1">Cast:
                        {movieData?.actors?.map((el, index) =>
                            (<div className="text-white text-sm" key={el?.name}>{el?.name}{((index + 1) !== movieData?.actors?.length) && ","}</div>)
                        )}
                    </div>
                    <div className="text-neutral-500 text-sm flex flex-wrap gap-1">
                        Genres:
                        <div className="text-white text-sm" >{movieData?.enumGenres}</div>
                    </div>
                </div>
            </div>
            {movieData?.isTVShow && (
                <div className="pb-9">
                    <div className="font-semibold text-xl pb-2 border-b-[1px] border-neutral-600">Episodes</div>
                    {movieData?.video?.map((el, index) => <EpisodeBox key={index} movie={el} />)}
                </div>
            )}
            <div>
                <div className="font-semibold text-xl pb-2">More Like This</div>
                {moreLikeThisData?.map((el, index) => <MovieLikeThisBox key={index} movie={el} />)}
            </div>
        </div>
    )
}