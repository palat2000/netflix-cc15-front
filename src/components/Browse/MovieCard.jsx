import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ButtonMovieCardGroup from "./ButtonMovieCardGroup";
import AddToListButton from "../button/AddToListButton";
import PlayCircleButton from "../Button/PlayCircleButton";
import LikeButton from "../button/LikeButton";
import MoreInfoCircleButton from "../Button/MoreInfoCircleButton";
import { Fade } from "@mui/material";

export default function MovieCard({ movie }) {
  const [visible, setVisible] = useState(false);
  // console.log('djkashd', movie)

  const hoverStart = () => {
    setVisible(true);
  };

  const hoverEnd = () => {
    setVisible(false);
  };

  return (
    // <motion.div
    //   className="box"
    //   whileHover={{ scale: [null, 1.5, 1.4] }}
    //   transition={{ duration: 0.3 }}
    // />
    <motion.div
      whileHover={{
        scale: 1.5,
        // transitionDelay: "0.7s",
        transitionDuration: "0.3s",
        zIndex: visible ? 50 : 1,
      }}
      onHoverStart={hoverStart}
      onHoverEnd={hoverEnd}
      className="box w-fit absolute"
    >
      <div className="relative flex flex-col rounded-md bg-zinc-900 w-fit">
        {visible ? (
          <>
            <video
              className="rounded-t-md "
              width="200"
              height="auto"
              muted
              loop
              autoPlay
              controls=""
            >
              <source src={movie?.trailer} type="video/mp4" />
            </video>
            <div className="flex flex-col  bg-zinc-900 ">
              <div className="flex justify-between   ">
                <div className="flex items-center">
                  <PlayCircleButton customizeClass={"-mr-1 scale-75"} />
                  <AddToListButton customizeClass={"scale-75"} />
                  <LikeButton customizeClass={""} />
                </div>
                <MoreInfoCircleButton movieId={movie.id} customizeClass={" scale-75"} />
              </div>
            </div>
            <div>
              <div className=" text-white text-xs/[5px] left-0 bottom-0">
                {movie?.title}
              </div>
              <div className=" text-white text-xs/[5px] left-0 bottom-0">
                {movie?.enumGenres}
              </div>
            </div>
          </>
        ) : (
          <img src={movie?.image} className="rounded-md" />
        )}
      </div>
    </motion.div>
  );
}
