import { useState } from "react";

export default function HoverMovieCard() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return <div>HoverMovieCard</div>;
}
