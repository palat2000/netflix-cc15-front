import AddToListButton from "../Button/AddToListButton";
import LikeButton from "../Button/LikeButton";
import MoreInfoCircleButton from "../Button/MoreInfoCircleButton";
import PlayCircleButton from "../Button/PlayCircleButton";

export default function MovieCard() {
  return (
    <div className="relative flex flex-col rounded-sm  bg-zinc-900 w-fit ">
      <video
        className="rounded-t-md "
        width="250"
        height="auto"
        muted
        controls=""
      >
        <source
          src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
          type="video/mp4"
        />
      </video>
      <div className="flex justify-between ">
        <div className="flex items-center">
          <PlayCircleButton customizeClass={" scale-90"} />
          <AddToListButton customizeClass={"scale-90"} />
          <LikeButton customizeClass={"scale-90"} />
        </div>
        <MoreInfoCircleButton customizeClass={"scale-90"} />
      </div>
    </div>
  );
}
