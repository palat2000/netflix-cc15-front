import ContentModal from "../feature/ContentModal";
import ContentModalContextProvider from "../feature/context/ContentModalContext";

function UserBrowsePage() {
  return (
    <div>
      UserBrowsePage
      <ContentModalContextProvider movieId={1} >
        <ContentModal />
      </ContentModalContextProvider>
    </div >
  );
}

export default UserBrowsePage;
