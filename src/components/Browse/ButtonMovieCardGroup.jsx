import LikeFeatureButton from "../../feature/LikeFeatureButton";
import LikeButton from "../Button/LikeButton";
import MoreInfoCircleButton from "../Button/MoreInfoCircleButton";
import PlayCircleButton from "../Button/PlayCircleButton";
import AddToListButton from "../Button/AddToListButton";

export default function ButtonMovieCardGroup() {
  return (
    <div className="relative flex flex-col rounded-sm bg-zinc-900 w-fit ">
      <div className="flex justify-between m-2 ">
        <div className="flex items-center">
          <PlayCircleButton customizeClass={" scale-90"} />
          <AddToListButton customizeClass={"scale-90"} />
          <LikeButton customizeClass={"scale-90"} />
        </div>
        <MoreInfoCircleButton customizeClass={"scale-90"} />
      </div>
      <div className="text-white text-xs">Movie Name</div>
      <div className="text-white text-xs">Genres</div>
    </div>
  );
}
