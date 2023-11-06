// import { useEffect, useState } from "react"

import TrailerHeaderModal from "./TrailerHeaderModal";
import useContentModal from "./hook/useContentModal";

export default function ContentModalDetail() {
  const { movieData } = useContentModal();

  console.log(movieData);
  return (
    <>
      <div className="bg-black bg-opacity-80 pt-5 flex flex-col justify-start items-center absolute w-screen h-screen top-0 left-0 overflow-auto ">
        {movieData ? (
          <div className="bg-neutral-900 rounded-md overflow-y-hidden text-white flex flex-col w-1/2 items-center absolute">
            <TrailerHeaderModal trailer={movieData?.trailer} />
            <div>Title:{movieData?.title}</div>
            <div className="flex">Detail:{movieData?.detail}</div>
            <div>Genre:{movieData?.genres}</div>
            <div>Actors:{movieData?.actors}</div>
            <div className="w-full break-words">Video:{movieData?.video}</div>
            <div className="w-full break-words">Video:{movieData?.video}</div>
            <div className="w-full break-words">Video:{movieData?.video}</div>
            <div className="w-full break-words">Video:{movieData?.video}</div>
            <div className="w-full break-words">Video:{movieData?.video}</div>
            <div className="w-full break-words">
              moreLikeThis:{movieData?.moreLikeThis}
            </div>
          </div>
        ) : (
          <> </>
        )}
      </div>
    </>
  );
}
