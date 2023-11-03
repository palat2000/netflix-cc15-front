import ContentModalDetail from "./ContentModalDetail"
import { useSelector, useDispatch } from 'react-redux'
import { openModal, setData } from "../store/slice/contentSlice"
import { useEffect } from "react"


export default function ContentModal({ movieId, component }) {

    const modalIsOpen = useSelector(state => state.content.modalIsOpen)
    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(setData(movieId))
        }
    )

    console.log(modalIsOpen)

    return (
        <>
            <div className="cursor-pointer" onClick={() => dispatch(openModal())}>{component || "Open"}</div>
            {modalIsOpen && (
                <ContentModalDetail movieId={movieId} />
            )
            }
        </>
    )
}
