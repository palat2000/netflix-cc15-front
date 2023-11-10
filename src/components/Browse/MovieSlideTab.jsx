import React from "react";
import { motion } from "framer-motion";
import MovieCard from "./MovieCard";

function MovieSlideTab() {
  return (
    <motion.div
      whileHover={{ scale: 1.5 }}
      className="example-container movie-item flex"
    >
      <MovieCard />
    </motion.div>
  );
}

export default MovieSlideTab;
