import TrailerLayout from './TrailerLayout';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../store/slice/contentSlice';

export default function TrailerHeaderModal({ movieId }) {
    const trailerIsMute = useSelector(state => state.content[movieId].trailerIsMute)
    const movieData = useSelector(state => state?.content[movieId]?.data?.movie[0])
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col relative w-full">
            <TrailerLayout movieId={movieId} />
            <Link onClick={() => dispatch(closeModal())} to={`/watch/${movieId}`}>
                <video poster={movieData?.image} className="overflow-hidden" width="100%" height="100%" muted={trailerIsMute} autoPlay>
                    <source src={movieData?.trailer}></source>
                </video>
            </Link>
        </div>
    )
}
