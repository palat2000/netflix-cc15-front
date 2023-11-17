import { useDispatch, useSelector } from "react-redux";
import ContentModal from "../../feature/ContentModal";
import { mainTrailerMute, mainTrailerUnMute } from "../../store/slice/mainTrailerSlice";
import MoreInfoButton from "../Button/MoreInfoButton";
import MuteButton from "../Button/MuteButton";
import PlayButton from "../Button/PlayButton";
import SoundOnButton from "../Button/SoundOnButton";

export default function ButtonMainTrailerGroup({ movie }) {
  const dispatch = useDispatch()
  const mainTrailerIsMute = useSelector(store => store?.mainTrailer?.mainTrailerIsMute)
  console.log("🚀 ~ file: ButtonMainTrailerGroup.jsx:12 ~ ButtonMainTrailerGroup ~ mainTrailerIsMute:", mainTrailerIsMute)

  return (
    <div>
      <div>
        <div className="flex justify-between z-10 ">
          <div className="flex">
            <PlayButton customizeClass={"ml-0 flex justify-center items-center"} />
            <div>
              <ContentModal movieId={movie?.id}>
                <MoreInfoButton customizeClass={"ml-0 p-10"} />
              </ContentModal>
            </div>
          </div>
          {!mainTrailerIsMute ?
            <div onClick={() => dispatch(mainTrailerMute())}>
              <SoundOnButton />
            </div>
            :
            <div onClick={() => dispatch(mainTrailerUnMute())}>
              <MuteButton />
            </div>
          }
        </div>
      </div>
    </div>
  );
}
