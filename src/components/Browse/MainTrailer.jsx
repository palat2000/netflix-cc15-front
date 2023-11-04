import MovieDetails from "./MovieDetails";

export default function MainTrailer() {
  return (
    <div>
      <div className="relative">
        <MovieDetails />

        <video width="4000" height="auto" loop muted autoPlay controls="">
          <source
            src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596144/action/o4ln7l1yshyx4mv5jqnh.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
