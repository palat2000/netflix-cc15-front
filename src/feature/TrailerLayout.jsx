import TrailerLayoutLeft from "./TrailerLayoutLeft";
import TrailerLayoutRight from "./TrailerLayoutRight";

export default function TrailerLayout({ movieId, setOpen }) {
  return (
    <div className="bg-opacity-20 absolute flex justify-center items-end h-full w-full pt-5 pb-5">
      <div className="flex justify-between w-11/12 h-full items-end">
        <TrailerLayoutLeft movieId={movieId} />
        <TrailerLayoutRight movieId={movieId} setOpen={setOpen} />
      </div>
    </div>
  );
}
