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

  const scale = isHovered ? 2 : 1;

  return (
    <div onMouseLeave={handleMouseLeave}>
      <div
        onMouseOver={handleMouseEnter}
        style={{ transform: `scale(${scale})` }}
      >
        <MovieCard movie={movie} />
      </div>
    </div>
  );
}
