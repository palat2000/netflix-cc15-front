import ContentModalDetail from "./ContentModalDetail";
import useContentModal from "./hook/useContentModal";

export default function ContentModal({ movieId, component }) {
  const { isOpen, handleClickOpen } = useContentModal();

  return (
    <>
      <div onClick={handleClickOpen}>{component || "Open"}</div>
      {isOpen && <ContentModalDetail movieId={movieId} />}
    </>
  );
}
