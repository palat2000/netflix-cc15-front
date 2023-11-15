import ButtonMainTrailerGroup from "./ButtonMainTrailerGroup";

export default function MovieDetails({ movie }) {
  return (
    <div>
      <div>
        <div className=" absolute z-10 text-white ml-10 bottom-1/4  md:box-content">
          <div className="static text-4xl font-extrabold ">{movie?.title}</div>
          <div className="static text-base font-extralight pt-2 w-1/2 ">
            {movie?.detail}
          </div>
          <div className="sticky">
            <ButtonMainTrailerGroup />
          </div>
        </div>
      </div>
    </div>
  );
}
