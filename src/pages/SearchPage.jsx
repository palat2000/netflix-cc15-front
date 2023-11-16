import { useState, useEffect, useCallback } from "react";

import axios from "axios";
import { useSelector } from "react-redux";
import MyListCard from "../components/Browse/MyListCard";

export default function SearchPage() {
  const movie = useSelector((state) => state.allContent.data);

  const [movies, setMovies] = useState(null);
  const search = useSelector((store) => store.search.search);

  const searchMovies = useCallback(async (search) => {
    const res = await axios.get(`/user-browse/search?q=${search}`);
    setMovies(res?.data?.searchMovieBytitle);
  }, []);

  console.log(movie);
  useEffect(() => {
    if (search) {
      searchMovies(search);
    } else {
      setMovies([]);
    }
  }, [search, searchMovies]);

  return (
    <>
      <div className="bg-black h-full pr-10 pl-10 pb-8 pt-8">
        <div className="flex py-2">
          <div className="text-[#808080] pt-20">more to explore:</div>
          <div className="text-[#ffffff] pl-2 pt-20">{search}</div>
        </div>
        <div className="grid grid-cols-6 gap-3 bg-fixed ">
          {movies &&
            movies?.map((vdo, i) => {
              return (
                <div key={i}>
                  <MyListCard movie={vdo} />

                  <div className="text-white">{vdo.title}</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
