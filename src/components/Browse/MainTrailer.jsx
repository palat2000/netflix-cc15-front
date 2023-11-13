import MovieDetails from "./MovieDetails";

export default function MainTrailer({ mainTrailerMovie }) {
  return (
    <div>
      <div className="relative">
        <MovieDetails movie={mainTrailerMovie} />
        <video width="4000" height="auto" loop muted autoPlay controls="">
          {mainTrailerMovie && (
            <source src={mainTrailerMovie?.trailer} type="video/mp4" />
          )}
        </video>
      </div>
    </div>
  );
}
