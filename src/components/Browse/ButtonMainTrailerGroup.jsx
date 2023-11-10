import ContentModal from "../../feature/ContentModal";
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
              <ContentModal movieId={1}>
                <MoreInfoCircleButton customizeClass={"ml-0 p-10  "} />
              </ContentModal>
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
