import ContentModalDetail from "./ContentModalDetail"
import { useSelector, useDispatch } from 'react-redux'
import { changStatusOpenModal, fetchContentAction, openModal, setData } from "../store/slice/contentSlice"
import { useEffect, useState } from "react"

export default function ContentModal({ movieId, children }) {

  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(
    () => { dispatch(changStatusOpenModal(open)) }
    , [open]
  )

  return (
    <>
      <div className="cursor-pointer" onClick={() =>
        setOpen(true)
      }>{children || "Open"}</div>
      {
        open
        && (
          <ContentModalDetail setOpen={setOpen} movieId={movieId} />
        )
      }
    </>
  )
}
