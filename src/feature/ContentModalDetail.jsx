import { useEffect, useState } from "react"
// import axios from 'axios'
// import testApiURL from "./testApiURL"
import TrailerHeaderModal from "./TrailerHeaderModal"

export default function ContentModalDetail({ movieId }) {

    const movie1 = {
        trailer: "https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596816/comedy/ui7yzevyv2zfbiibhccl.mp4",
        title: "CC15 Movie",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea nesciunt velit soluta saepe voluptatibus ratione eum, earum, beatae corporis, blanditiis quidem esse deleniti perspiciatis fugit laudantium quam inventore molestias?",
        genres: [
            "Action", "Romantic", "Drama"
        ],
        actors: [
            "John Doe", "Jame Gun"
        ],
        video: [
            "https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596798/comedy/p05jweqnn4nodn4kul3k.mp4",
            "https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596813/comedy/thty6xjejosysd2e3sjl.mp4"
        ],
        isTVShow: true,
        moreLikeThis: [
            "https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596791/comedy/c98aciomnbishivi0bc6.mp4",
            "https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596677/sport/hq3oqhypoxi4anltqras.mp4"
        ],
    }
    const [movieData, setMovieData] = useState(null)


    useEffect(() => {
        if (movieId === 1) {
            setMovieData(movie1)
        }
    }, [])

    console.log(movieData)
    return (
        <div className="flex flex-col bg-black items-center absolute w-full h-full top-0 left-0 p-5">
            {movieData ? (<div className="bg-red-900 text-white flex flex-col w-full items-center">
                ContentModal
                <TrailerHeaderModal trailer={movieData?.trailer} />
                <div>Title:{movieData?.title}</div>
                <div className="flex">Detail:{movieData?.detail}</div>
                <div>Genre:{movieData?.genres}</div>
                <div>Actors:{movieData?.actors}</div>
                <div>Video:{movieData?.video}</div>
                <div>moreLikeThis:{movieData?.moreLikeThis}</div>
            </div>) : (<> </>)}

        </div>
    )
}
