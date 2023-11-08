import { useState } from "react";
import MovieCard from "./MovieCard";

export default function HoverMovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scale = isHovered ? 1.2 : 1;

  return (
    <div onMouseLeave={handleMouseLeave}>
      <button
        onMouseEnter={handleMouseEnter}
        style={{ transform: `scale(${scale})` }}
      >
        <MovieCard movie={movie} />
      </button>

      {isHovered && <MovieCard movie={movie} />}
    </div>
  );
}
