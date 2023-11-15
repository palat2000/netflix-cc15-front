import { useDispatch, useSelector } from "react-redux"
import InfoBody from "./InfoBody"
import TrailerHeaderModal from "./TrailerHeaderModal"
import { changStatusOpenModal, fetchContentAction } from "../store/slice/contentSlice"
import { useEffect } from "react"

export default function ContentModalDetail({ setOpen }) {

  const dispatch = useDispatch()

  const movieId = useSelector(store => store?.content?.movieId)

  useEffect(
    () => {
      dispatch(fetchContentAction(movieId)).unwrap().then(res => console.log(res)).catch(err => { console.log(err) })
    }, []
  )

  const movieData = useSelector(state => state?.content?.data)
  console.log("🚀 ~ file: ContentModalDetail.jsx:19 ~ ContentModalDetail ~ movieData:", movieData)

  return (
    <>
      <div className="bg-black bg-opacity-90 pt-5 flex flex-col justify-start items-center fixed w-screen h-screen top-0 left-0 z-50 overflow-auto">
        <div onClick={() => dispatch(changStatusOpenModal(false))} className="w-full h-screen "></div>
        {movieData ? (
          <div className="flex flex-col w-full items-center h-full absolute p-[2%] max-w-[850px]">
            <div className="flex bg-neutral-900 text-white flex-col w-full items-center">
              <TrailerHeaderModal setIsLoad movieId={movieId} setOpen={setOpen} />
              <InfoBody movieId={movieId} />
            </div>
          </div>
        ) : (<> </>)}
      </div >
    </>
  )
}