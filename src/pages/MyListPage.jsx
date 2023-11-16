import { useCallback, useEffect, useState } from "react";

import axios from "axios";
import MyListCard from "../components/Browse/MyListCard";

function MyListPage() {
  const [myList, setMyList] = useState(null);

  const getMyList = useCallback(async () => {
    try {
      const res = await axios.get("/user-browse/mylist");

      setMyList(res.data.myList);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getMyList();
  }, [getMyList]);

  return (
    <>
      <div className="bg-black h-full pr-10 pb-8 pt-40 ">
        <div className="grid grid-cols-6 gap-3  bg-fixed mx-20 ">
          {myList?.map((vdo) => {
            return <MyListCard key={vdo.movie.id} movie={vdo.movie} />;
          })}
        </div>
      </div>
    </>
  );
}

export default MyListPage;
