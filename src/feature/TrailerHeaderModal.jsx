import TrailerLayout from './TrailerLayout';
import useContentModal from './hook/useContentModal';
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

export default function TrailerHeaderModal({ movieId }) {
    const { movieData } = useContentModal()

    const trailerIsMute = useSelector(state => state.content[movieId].trailerIsMute)

    return (
        <div className="flex flex-col relative w-full">
            <TrailerLayout movieId={movieId} />
            <Link to={`/watch/${movieId}`}>
                <video className="overflow-hidden" width="100%" height="100%" muted={trailerIsMute} autoPlay>
                    <source src={movieData?.trailer}></source>
                </video>
            </Link>
        </div>
    )
}
