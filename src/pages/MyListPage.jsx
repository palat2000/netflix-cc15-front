import { useCallback, useEffect, useState } from "react";

import axios from "axios";

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
      <div className="bg-black h-full pr-10 pl-10 pb-8 pt-8">
        <div className="grid grid-cols-6 gap-3  bg-fixed ">
          {myList &&
            myList?.map((vdo, i) => {
              console.log(vdo, "VDO AI SARD");
              return (
                <div key={i}>
                  <video
                    className="rounded-md pb-8 pt-8 "
                    src={vdo.movie.trailer}
                    alt="Mockup"
                  />

                  <div className="text-white">{vdo.movie.title}</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default MyListPage;
