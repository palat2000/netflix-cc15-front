import { createContext, useEffect, useRef, useState } from "react"

export const ContentModalContext = createContext()

export default function ContentModalContextProvider({ children, movieId }) {

    const [isOpen, setIsOpen] = useState(false)
    const [movieData, setMovieData] = useState(null)

    // ใช้แทน res.data ={movie: [{}] , moreLikeThis:[{},{}]} 
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

    useEffect(() => {
        if (movieId === 1) {
            // Final ต้อง Axios
            setMovieData(movie1)
        }
    }, [])

    const handleClickOpen = () => {
        setIsOpen(true)
    }
    const handleClickClose = () => { setIsOpen(false) }
    const trailerPlayer = useRef(null)

    return (
        <ContentModalContext.Provider value={{ handleClickOpen, handleClickClose, isOpen, movie1, trailerPlayer, movieId, movieData }}>
            {children}
        </ContentModalContext.Provider>
    )
}
