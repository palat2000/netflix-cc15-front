import TrailerLayout from './TrailerLayout';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../store/slice/contentSlice';
import { useRef, useState } from 'react';

export default function TrailerHeaderModal({ movieId }) {
    const trailerIsMute = useSelector(state => state.content[movieId].trailerIsMute)
    const movieImage = useSelector(state => state?.content[movieId]?.data?.movie[0]?.image)
    const movieTrailer = useSelector(state => state?.content[movieId]?.data?.movie[0]?.trailer)
    const dispatch = useDispatch()

    const [play, setPlay] = useState(false)
    const trailerPlayer = useRef(null)

    function playTrailer() {
        setPlay(true)
        trailerPlayer.current.load()
    }

    setTimeout(() => playTrailer(), 3000)

    return (
        <div className="flex flex-col relative w-full">
            <TrailerLayout movieId={movieId} />
            <Link onClick={() => dispatch(closeModal())} to={`/watch/${movieId}`}>
                <video ref={trailerPlayer} preload='true' poster={movieImage} className="overflow-hidden" width="100%" height="100%" muted={trailerIsMute} autoPlay>
                    {play && <source src={movieTrailer}></source>}
                </video>
            </Link>
        </div>
    )
}
