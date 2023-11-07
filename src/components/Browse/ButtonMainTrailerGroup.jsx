import ContentModal from "../../feature/ContentModal";
import MoreInfoButton from "../Button/MoreInfoButton";
import MuteButton from "../button/new/MuteButton";
import PlayButton from "../button/new/PlayButton";

export default function ButtonMainTrailerGroup() {
  return (
    <div>
      <div>
        <div className="flex justify-between z-10 ">
          <div className="flex">
            <PlayButton customizeClass={"ml-0 "} />
            <div>
              <ContentModal>
                <MoreInfoButton customizeClass={"ml-0 p-10  "} />
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
