import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ButtonMovieCardGroup from "./ButtonMovieCardGroup";
import AddToListButton from "../button/AddToListButton";
import PlayCircleButton from "../Button/PlayCircleButton";
import LikeButton from "../button/LikeButton";
import MoreInfoCircleButton from "../Button/MoreInfoCircleButton";
import axios from "../../config/axios";

export default function MovieCard({ movie }) {
  const [visible, setVisible] = useState(false);

  const hoverStart = () => {
    setVisible(true);
  };

  const hoverEnd = () => {
    setVisible(false);
  };

  const [isLike, setIsLike] = useState(false);

  const handleLike = async () => {
    try {
      const res = await axios.patch("/user-browse/like", { movieId: movie.id });
      setIsLike(res.data.likeData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      whileHover={{
        scale: 2,
        // transitionDelay: "0.7s",
        transitionDuration: "0.25s",
        zIndex: visible ? 99999 : 1,
      }}
      onHoverStart={hoverStart}
      onHoverEnd={hoverEnd}
      className="box w-fit absolute"
      style={{ zIndex: 2 }}
    >
      <div className="relative flex flex-col rounded-md bg-zinc-900 w-fit">
        {visible ? (
          <>
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
            <div className="flex flex-col  bg-zinc-900 ">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <PlayCircleButton customizeClass={"-mr-1 scale-75"} />
                  <AddToListButton customizeClass={"scale-75"} />
                  <LikeButton
                    handleLike={handleLike}
                    isLike={isLike}
                    customizeClass={""}
                  />
                </div>
                <MoreInfoCircleButton customizeClass={" scale-75"} />
              </div>
            </div>
            <div>
              <div className=" text-white text-xs left-0 bottom-0">
                {movie?.title}
              </div>
              <div className=" text-white text-xs left-0 bottom-0">
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
