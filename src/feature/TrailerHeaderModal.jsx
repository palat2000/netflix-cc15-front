import TrailerLayout from './TrailerLayout';
import useContentModal from './hook/useContentModal';
import { Link } from "react-router-dom"

export default function TrailerHeaderModal({ trailer }) {
    const { trailerPlayer } = useContentModal()
    const { movieId } = useContentModal()

    return (
        <div className="flex flex-col relative w-full">
            <TrailerLayout />
            <Link to={`/watch/${movieId}`}>
                <video ref={trailerPlayer} width="100%" height="100%" muted autoPlay>
                    <source src={trailer}></source>
                </video>
            </Link>
        </div>
    )
}
