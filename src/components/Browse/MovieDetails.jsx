import ButtonMainTrailerGroup from "./ButtonMainTrailerGroup";

export default function MovieDetails({ movie }) {
  return (
    <div>
      <div>
        <div className=" absolute z-10 text-white ml-10 bottom-2/4  md:box-content ">
          <div className="static text-3xl font-extrabold ">{movie?.title}</div>
          <div className="absolute text-[10px] font-extralight pt-2 ">
            {movie?.detail}
            <ButtonMainTrailerGroup />
          </div>
        </div>
      </div>
    </div>
  );
}
