import { useDispatch, useSelector } from "react-redux"
import InfoBody from "./InfoBody"
import TrailerHeaderModal from "./TrailerHeaderModal"
import { closeModal } from "../store/slice/contentSlice"

export default function ContentModalDetail({ movieId }) {

  const movieData = useSelector(state => state?.content[movieId]?.data)

  const dispatch = useDispatch()

  return (
    <>
      <div className="bg-black bg-opacity-90 pt-5 flex flex-col justify-start items-center fixed w-screen h-screen top-0 left-0 z-50 overflow-auto">
        <div onClick={() => dispatch(closeModal())} className="w-full h-screen "></div>
        {movieData ? (
          <div className="flex flex-col w-full items-center h-full absolute p-[2%] max-w-[850px]">
            <div className="bg-neutral-900 text-white flex flex-col w-full items-center">
              <TrailerHeaderModal movieId={movieId} />
              <InfoBody movieId={movieId} />
            </div>
          </div>) : (<> </>)}
      </div>
    </>
  )
}