import ContentModalDetail from "./ContentModalDetail";
import { useDispatch } from "react-redux";
import { changStatusOpenModal } from "../store/slice/contentSlice";
import { useEffect, useState } from "react";

export default function ContentModal({ movieId, children }) {
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(changStatusOpenModal(open));
  // }, [open]);

  return (
    <>
      {/* <div className="cursor-pointer" onClick={() => setOpen(true)}> */}
      <div className="cursor-pointer" onClick={() => dispatch(changStatusOpenModal(true))}>
        {children || "Open"}
      </div>
      {/* {open && <ContentModalDetail setOpen={setOpen} movieId={movieId} />} */}
    </>
  );
}
