import React from "react";
import { motion } from "framer-motion";
import MovieCard from "./MovieCard";

function MovieSlideTab() {
  return (
    <motion.div whileHover={{ scale: 1.5 }} className="movie-item">
      <MovieCard />
      {/* <video
        className="rounded-t-md"
        width="200"
        height="auto"
        muted
        loop
        autoPlay
        controls=""
      >
        <source
          src="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596816/comedy/ohox5l0fspwywcynxvqr.mp4"
          type="video/mp4"
        />
      </video> */}
    </motion.div>
  );
}

export default MovieSlideTab;
