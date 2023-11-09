import TrailerLayoutRight from "./TrailerLayoutRight";
import useContentModal from "./hook/useContentModal";
import PlayButton from "../components/button/PlayButton";
import AddToListButton from "../components/button/AddToListButton";
import LikeButton from "../components/button/LikeButton";

export default function TrailerLayout() {
  const { movieData } = useContentModal();

  return (
    <div className="bg-red-300 bg-opacity-20 absolute flex justify-center items-end h-full w-full pt-4">
      <div className="flex justify-between w-11/12 h-full items-end">
        <div className="z-10 w-5/12 flex flex-col gap-3">
          <h1 className="text-4xl font-semibold">{movieData?.title}</h1>
          <div className="flex items-center gap-1">
            <PlayButton />
            <div className="flex">
              <AddToListButton />
              <LikeButton />
            </div>
          </div>
        </div>
        <TrailerLayoutRight />
      </div>
    </div>
  );
}
