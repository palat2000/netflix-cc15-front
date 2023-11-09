export default function MovieCard({ movie }) {
  return (
    <div className="relative flex flex-col rounded-sm  bg-zinc-900  ">
      <video
        className="rounded-t-md"
        width="200"
        height="auto"
        muted
        loop
        autoPlay
        controls=""
      >
        <source src={movie?.trailer} type="video/mp4" />
      </video>
    </div>
  );
}
