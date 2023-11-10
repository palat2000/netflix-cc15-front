import ContentModalDetail from "./ContentModalDetail";
import useContentModal from "./hook/useContentModal";

export default function ContentModal({ movieId, children }) {
  const { isOpen, handleClickOpen } = useContentModal();

  return (
    <>
      <div onClick={handleClickOpen}>{children || []}</div>
      {isOpen && <ContentModalDetail movieId={movieId} />}
    </>
  );
}
