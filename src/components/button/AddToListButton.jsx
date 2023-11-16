import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { editMylist, getMyListById } from "../../store/utils/contentApi";

export default function AddToListButton({ movieId, handleClick, customizeClass }) {

  const [isAddToMyList, setIsAddToMyList] = useState(false);

  useEffect(
    () => {
      getMyListById(movieId).then(res => {
        console.log('bdaskjdasjk', res)
        setIsAddToMyList(res?.isInMyList)
      })
    }, []
  )

  // const handleAddToMyList = async () => {
  //   try {
  //     const res = await axios.post("/user-browse/mylist", {
  //       movieId: movieId,
  //     });

  //     setIsAddToMyList(res.data.movieAddtoList);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleAddToMyList = () => {
    editMylist(movieId).then(res => {
      console.log(res)
      setIsAddToMyList(res.movieAddtoList);
    }
    )
    // setIsAddToMyList(res.data.movieAddtoList);
  };


  return (
    <div className={`${customizeClass}`} onClick={handleAddToMyList}>
      <FontAwesomeIcon
        icon={faPlus}
        // className="text-neutral-300 bg-zinc-900 bg-opacity-80 border border-neutral-400 rounded-full  hover:text-neutral-300 hover:border-neutral-300 hover:bg-neutral-60  p-2"
        className={`${isAddToMyList ?
          "bg-neutral-500 text-zinc-900 bg-opacity-80 border border-neutral-400 rounded-full  hover:text-neutral-300 hover:border-neutral-300 hover:bg-neutral-60 p-2"
          :
          "text-neutral-300 bg-zinc-900 bg-opacity-80 border border-neutral-400 rounded-full  hover:text-neutral-300 hover:border-neutral-300 hover:bg-neutral-60 p-2"
          }`}
      />
    </div>
  );
}
