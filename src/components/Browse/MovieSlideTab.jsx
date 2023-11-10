import React from "react";
import { motion } from "framer-motion";
import MovieCard from "./MovieCard";
import { Slide } from "@mui/material";

function MovieSlideTab() {
  return (
    <div className="flex text-white">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}

export default MovieSlideTab;
