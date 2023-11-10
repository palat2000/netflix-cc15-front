import ContentModalDetail from "./ContentModalDetail";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchContentAction,
  openModal,
  setData,
} from "../store/slice/contentSlice";
import { useEffect } from "react";

export default function ContentModal({ movieId, children }) {
  const modalIsOpen = useSelector((state) => state.content.modalIsOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(movieId));
    dispatch(fetchContentAction(movieId))
      .unwrap()
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="cursor-pointer" onClick={() => dispatch(openModal())}>
        {children || []}
      </div>
      {modalIsOpen && <ContentModalDetail movieId={movieId} />}
    </>
  );
}
