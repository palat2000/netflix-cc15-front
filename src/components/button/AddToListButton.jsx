import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { editMylist, getMyListById } from "../../store/utils/contentApi";

export default function AddToListButton({ movieId, handleClick, customizeClass }) {

  const [isAddToMyList, setIsAddToMyList] = useState(false);

  const handleAddToMyList = () => {
    editMylist(movieId).then(res => {
      console.log(res)
      setIsAddToMyList(res.movieAddtoList);
    }
    )
  };

  return (
    <div className={`${customizeClass}`} onClick={handleAddToMyList}>
      {isAddToMyList ?
        <FontAwesomeIcon
          icon={faPlus}
          className="text-neutral-300 bg-zinc-900 bg-opacity-80 border border-neutral-400 rounded-full  hover:text-neutral-300 hover:border-neutral-300 hover:bg-neutral-60  p-2"
        /> :
        <FontAwesomeIcon
          icon={faCheck}
          className="text-neutral-300 bg-zinc-900 bg-opacity-80 border border-neutral-400 rounded-full  hover:text-neutral-300 hover:border-neutral-300 hover:bg-neutral-60  p-2"
        />
      }
    </div>
  );
}
