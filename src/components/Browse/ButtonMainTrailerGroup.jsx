import ContentModal from "../../feature/ContentModal";
import ContentModalContextProvider from "../../feature/context/ContentModalContext";
import MoreInfoCircleButton from "../button/MoreInfoCircleButton";
import MuteButton from "../button/MuteButton";
import PlayCircleButton from "../button/PlayCircleButton";

export default function ButtonMainTrailerGroup() {
  return (
    <div>
      <div>
        <div className="flex justify-between  z-10 ">
          <div className="flex">
            <PlayCircleButton customizeClass={"ml-0 "} />
            <div>
              <ContentModalContextProvider movieId={1}>
                <ContentModal>
                  <MoreInfoCircleButton customizeClass={"ml-0 p-10  "} />
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
