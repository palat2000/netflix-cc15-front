import AddToListButton from "../Button/AddToListButton";
import LikeButton from "../Button/LikeButton";
import MoreInfoCircleButton from "../Button/MoreInfoCircleButton";
import PlayCircleButton from "../Button/PlayCircleButton";

export default function MovieCard({ movie }) {
  return (
    <div className="relative flex flex-col rounded-sm  bg-zinc-900 w-fit ">
      <video
        className="rounded-t-md "
        width="250"
        height="auto"
        muted
        loop
        autoPlay
        controls=""
      >
        <source src={movie?.trailer} type="video/mp4" />
      </video>
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
