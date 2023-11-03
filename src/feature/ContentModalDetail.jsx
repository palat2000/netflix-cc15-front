import { useDispatch, useSelector } from "react-redux"
import InfoBody from "./InfoBody"
import TrailerHeaderModal from "./TrailerHeaderModal"
import useContentModal from "./hook/useContentModal"
import { closeModal } from "../store/slice/contentSlice"

export default function ContentModalDetail({ movieId }) {

    const { movieData } = useContentModal()

    const data = useSelector(state => state.content)
    console.log(data)
    console.log(data[movieId])
    const dispatch = useDispatch()

    console.log(movieData)
    return (
        <>
            <div className="bg-black bg-opacity-90 pt-5 flex flex-col justify-start items-center absolute w-screen h-screen top-0 left-0 z-50 overflow-hidden">
                <div onClick={() => dispatch(closeModal())} className="w-full h-screen"></div>
                {movieData ? (<div className="flex flex-col w-full items-center h-full absolute overflow-auto">
                    <div className="bg-neutral-900 text-white flex flex-col w-1/2 items-center">
                        <TrailerHeaderModal movieId={movieId} />
                        <InfoBody movieId={movieId} />
                    </div>
                </div>) : (<> </>)}
            </div>
        </>
    )
}
