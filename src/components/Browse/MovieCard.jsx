import AddToListButton from "../Button/AddToListButton";
import LikeButton from "../Button/LikeButton";
import PlayCircleButton from "../Button/PlayCircleButton";

export default function MovieCard() {
  return (
    <div className="overlay flex items-center">
      <PlayCircleButton customizeClass={"width-50"} />
      <AddToListButton customizeClass={"width-50"} />
      <LikeButton customizeClass={"width-50"} />
    </div>
  );
}
