import { Children, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ButtonMovieCardGroup from "./ButtonMovieCardGroup";
import AddToListButton from "../Button/AddToListButton";
import PlayCircleButton from "../Button/PlayCircleButton";
import LikeButton from "../Button/LikeButton";
import MoreInfoCircleButton from "../Button/MoreInfoCircleButton";
import axios from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentAction } from "../../store/slice/contentSlice";
import { setVideoId } from "../../store/slice/watchPageSlice";
import LikeFeatureButton from "../../feature/LikeFeatureButton";

export default function MovieCard({ movie }) {
  const [visible, setVisible] = useState(false);
  const likeHistory = useSelector(
    (store) => store?.content?.data?.movie?.likeHistory
  );
  // console.log(likeHistory);
  const [isLike, setIsLike] = useState(likeHistory);
  const dispatch = useDispatch();

  const hoverStart = () => {
    setVisible(true);
  };

  const hoverEnd = () => {
    setVisible(false);
  };

  const [isAddToMyList, setIsAddToMyList] = useState(false);

  const handleAddToMyList = async () => {
    try {
      const res = await axios.post("/user-browse/mylist", {
        movieId: movie.id,
      });

      // console.log("handleAddToMyList res =", res);
      setIsAddToMyList(res.data.myList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (visible) {
      dispatch(fetchContentAction(movie.id));
    } else {
      dispatch(setVideoId(null));
    }
  }, [visible]);

  return (
    <motion.div
      whileHover={{
        scale: 2,
        // transitionDelay: "0.7s",
        transitionDuration: "0.25s",
        zIndex: visible ? 99 : 1,
      }}
      onHoverStart={hoverStart}
      onHoverEnd={hoverEnd}
      className="box w-fit absolute bg-black"
    >
      <div className="relative flex flex-col rounded-md bg-zinc-900 w-fit -translate-y-3">
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
                  <PlayCircleButton
                    movieId={movie.id}
                    customizeClass={"-mr-1 scale-75"}
                  />
                  <AddToListButton
                    movieId={movie.id}
                    // handleClick={handleAddToMyList}
                    customizeClass={"scale-75"}
                  />
                  <LikeButton
                    movieId={movie.id}
                    likeMovie={movie?.likeMovie}
                    customizeClass={""}
                  />
                </div>
                <MoreInfoCircleButton
                  movieId={movie.id}
                  likeMovie={movie.likeMovie}
                  customizeClass={" scale-75"}
                />
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
