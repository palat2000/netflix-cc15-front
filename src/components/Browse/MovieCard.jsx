import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCard() {
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
    <div className="relative flex  rounded-sm  bg-zinc-900  ">
      <video
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
      </video>
    </div>
  );
}
