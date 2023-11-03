import ContentModalDetail from "./ContentModalDetail"
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../store/slice/movieSlice'

export default function ContentModal({ movieId, component }) {

    const modalIsOpen = useSelector(state => state.movie.modalIsOpen)
    const dispatch = useDispatch()

    console.log(modalIsOpen)

    return (
        <>
            <div onClick={() => dispatch(openModal())}>{component || "Open"}</div>
            {modalIsOpen && (
                <ContentModalDetail movieId={movieId} />
            )
            }
        </>
    )
}
