import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import ButtonMovieCardGroup from "./ButtonMovieCardGroup";
import AddToListButton from "../button/AddToListButton";
import PlayCircleButton from "../Button/PlayCircleButton";
import LikeButton from "../button/LikeButton";
import MoreInfoCircleButton from "../Button/MoreInfoCircleButton";

export default function MovieCard({ movie }) {
  // const navigate = useNavigate();
  // let search = window.location.search;
  // let params = new URLSearchParams(search);
  // let id = params.get("id");

  // const [movies, setMovieS] = useState(null);

  // const getMovieById = useCallback(
  //   async (id) => {
  //     const res = await axios.get(`/movie/${id}`);

  //     setMovieS(res?.data?.product);
  //   },
  //   [id]
  // );

  // useEffect(() => {
  //   getMovieById();
  // }, [getMovieById]);

  return (
    // <motion.div
    //   className="box"
    //   whileHover={{ scale: [null, 1.5, 1.4] }}
    //   transition={{ duration: 0.3 }}
    // />
    <motion.div whileHover={{ scale: 1.2 }} className="mx-1 ">
      <div className="relative flex flex-col rounded-sm  bg-zinc-900 w-fit  ">
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
        <div className="relative flex flex-col rounded-sm bg-zinc-900 w-fit ">
          <div className="flex justify-between m-2 ">
            <div className="flex items-center">
              <PlayCircleButton customizeClass={" scale-90"} />
              <AddToListButton customizeClass={"scale-90"} />
              <LikeButton customizeClass={"scale-90"} />
            </div>
            <MoreInfoCircleButton customizeClass={"scale-90"} />
          </div>
          <div className="text-white text-xs">{movie?.title}</div>
          <div className="text-white text-xs">{movie?.enumGenres}</div>
        </div>
      </div>
    </motion.div>
  );
}
