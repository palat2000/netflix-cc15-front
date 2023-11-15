import MovieDetails from "./MovieDetails";

export default function MainTrailer({ mainTrailerMovie }) {
  return (
    <div>
      <div className="relative h-screen bg-black">
        <MovieDetails movie={mainTrailerMovie} />
        <video
          width="auto"
          className=""
          height="auto"
          loop
          muted
          autoPlay
          controls=""
        >
          {mainTrailerMovie && (
            <source src={mainTrailerMovie?.trailer} type="video/mp4" />
          )}
        </video>
      </div>
    </div>
  );
}
