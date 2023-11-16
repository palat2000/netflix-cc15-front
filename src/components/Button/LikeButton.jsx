import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentAction } from "../../store/slice/contentSlice";
import { getLike } from "../../store/utils/contentApi";

export default function LikeButton({ customizeClass, movieId }) {
  const likeHistory = useSelector(store => store?.content?.data?.movie?.likeHistory)
  const [isLike, setIsLike] = useState(likeHistory)
  const dispatch = useDispatch()

  const handleLike = async () => {
    try {
      const res = await axios.patch("/user-browse/like", { movieId: movieId });
      setIsLike(res.data.likeData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(
    () => {
      getLike(movieId).then(res => setIsLike(res?.likeHistory))
    }, []
  )

  return (
    <div onClick={handleLike} className={`${customizeClass}`}>
      <FontAwesomeIcon
        icon={faThumbsUp}
        className={`${isLike ?
          "bg-neutral-500 text-zinc-900 bg-opacity-80 border border-neutral-400 rounded-full  hover:text-neutral-300 hover:border-neutral-300 hover:bg-neutral-60 p-1"
          :
          "text-neutral-300 bg-zinc-900 bg-opacity-80 border border-neutral-400 rounded-full  hover:text-neutral-300 hover:border-neutral-300 hover:bg-neutral-60 p-1"
          }`}
      />
    </div>
  );
}
