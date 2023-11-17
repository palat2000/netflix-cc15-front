import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ButtonMovieCardGroup from "./ButtonMovieCardGroup";
import AddToListButton from "../button/AddToListButton";
import PlayCircleButton from "../Button/PlayCircleButton";
import LikeButton from "../button/LikeButton";
import MoreInfoCircleButton from "../Button/MoreInfoCircleButton";
import axios from "../../config/axios";
import LikeFeatureButton from "../../feature/LikeFeatureButton";
import { useSelector } from "react-redux";

export default function MyListCard({ movie }) {
  const [visible, setVisible] = useState(false);
  console.log(movie);
  // const movieIsInMyListData = useSelector(
  //   (state) => state?.content?.data?.movie?.inMyListHistory
  // );
  // const movieIsInLikeData = useSelector(
  //   (state) => state?.content?.data?.movie?.likeHistory
  // );

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

  const [isAddToMyList, setIsAddToMyList] = useState(false);

  const handleAddToMyList = async () => {
    try {
      const res = await axios.post("/user-browse/mylist", {
        movieId: movie.id,
      });

      console.log("handleAddToMyList res =", res);
      setIsAddToMyList(res.data.myList);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.5,
        // transitionDelay: "0.7s",
        transitionDuration: "0.1s",
        zIndex: visible ? 99 : 1,
      }}
      onHoverStart={hoverStart}
      onHoverEnd={hoverEnd}
      className="box w-fit "
    >
      <div className="relative flex flex-col rounded-md bg-zinc-900 w-fit -translate-y-3">
        {visible ? (
          <>
            <img src={movie?.image} className="rounded-md" />
            {/* <source src={movie?.trailer} type="video/mp4" /> */}

            <div className="flex flex-col  bg-zinc-900 ">
              <div className="flex justify-between   ">
                <div className="flex items-center">
                  <PlayCircleButton customizeClass={"-mr-1 scale-75"} />
                  <AddToListButton
                    handleClick={handleAddToMyList}
                    customizeClass={"scale-75"}
                  />

                  {/* <LikeFeatureButton
                    movieId={movie.id}
                    movieIsInLikeData={movieIsInLikeData}
                  /> */}

                  <LikeButton
                    handleLike={handleLike}
                    isLike={isLike}
                    customizeClass={""}
                  />
                </div>
                <MoreInfoCircleButton
                  movieId={movie?.id}
                  customizeClass={" scale-75"}
                />
              </div>
            </div>
            <div>
              <div className=" text-white text-xs/[5px] py-1 left-0 bottom-0">
                {movie?.title}
              </div>
              <div className=" text-white text-xs/[5px] py-1  left-0 bottom-0">
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
