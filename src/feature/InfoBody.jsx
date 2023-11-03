import { useSelector } from "react-redux"

export default function InfoBody({ movieId }) {

    const movieData = useSelector(state => state?.content[movieId]?.data?.movie[0])
    const isSerie = movieData?.video

    console.log(movieData)
    console.log(movieData?.actors)


    return (
        <div className="flex flex-col w-11/12 ">
            <div className="flex w-full h-48">
                <div className="flex flex-col w-3/5 gap-4 ">
                    <div className="flex gap-2 text-neutral-400 text-base font-medium flex-wrap">
                        <div className="break-all">{movieData?.release_year}</div>
                        <div className="break-all">{(isSerie?.length > 1) && `${isSerie?.length}Episodes`}</div>
                    </div>
                    <div className="text-sm w-fullflex break-all">{movieData?.detail}</div>
                </div>
                <div className="flex flex-col w-2/">
                    <div className="text-neutral-500 text-sm flex flex-wrap gap-1">Cast:
                        {movieData?.actors.map(el =>
                            (<div className="text-white text-sm" key={el.name}>{el.name}</div>)
                        )}
                    </div>
                    <div className="text-neutral-500 text-sm flex flex-wrap gap-1">
                        Genres:
                        <div className="text-white text-sm" >{movieData?.enumGenres}</div>
                    </div>
                </div>
            </div>
            {/* /* <div className="flex">Detail:{movieData?.detail}</div>
            <div >Genre:{"movieData?.genres"}</div>
            <div>Actors:{"movieData?.actors"}</div>
            <div className="w-full break-words">Video:</div>
            <div className="w-full break-words">Video:</div>
            <div className="w-full break-words">Video:</div>
            <div className="w-full break-words">Video:</div>
            <div className="w-full break-words">Video:</div>
            <div className="w-full break-words">moreLikeThis:</div> */}
        </div>
    )
}
