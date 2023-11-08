import ContentModal from "../../feature/ContentModal";
import ContentModalContextProvider from "../../feature/context/ContentModalContext";
import MoreInfoButton from "../Button/MoreInfoButton";
import MuteButton from "../Button/MuteButton";
import PlayButton from "../Button/PlayButton";

export default function ButtonMainTrailerGroup() {
  return (
    <div>
      <div>
        <div className="flex justify-between  z-10 ">
          <div className="flex">
            <PlayButton customizeClass={"ml-0 "} />
            <div>
              <ContentModalContextProvider movieId={1}>
                <ContentModal>
                  <MoreInfoButton customizeClass={"ml-0 p-10  "} />
                </ContentModal>
              </ContentModalContextProvider>
            </div>
          </div>
          <div>
            <MuteButton />
          </div>
        </div>
      </div>
    </div>
  );
}
