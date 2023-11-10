import TrailerLayout from './TrailerLayout';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../store/slice/contentSlice';
import { useRef, useState } from 'react';

export default function TrailerHeaderModal({ movieId, setOpen }) {
    const trailerIsMute = useSelector(state => state?.content?.trailerIsMute)
    const movieImage = useSelector(state => state?.content?.data?.movie[0]?.image)
    const movieTrailer = useSelector(state => state?.content?.data?.movie[0]?.trailer)
    const dispatch = useDispatch()

    const [play, setPlay] = useState(false)
    const trailerPlayer = useRef(null)

    function playTrailer() {
        setPlay(true)
    }

    setTimeout(() => playTrailer(), 500)

    return (
        <div className="flex flex-col relative w-full">
            <TrailerLayout movieId={movieId} setOpen={setOpen} />
            <Link onClick={() => dispatch(closeModal())} to={`/watch/${movieId}`}>
                {!play && <img src={movieImage} />}
                {play && <video ref={trailerPlayer} preload='true' poster={movieImage} className="overflow-hidden" width="100%" height="100%" muted={trailerIsMute} autoPlay>
                    <source src={movieTrailer}></source>
                </video>}
            </Link>
            <div className='w-full h-[25%] absolute bottom-0 bg-gradient-to-t from-neutral-900'></div>
        </div>
    )
}
