import { useCallback, useEffect, useState } from "react";
// import NavbarAdult from "../components/Browse/NavbarAdult";
import axios from "axios";

function MyListPage() {
  // const [search, setSearch] = useState(null);
  const [myList, setMyList] = useState(null);

  const getMyList = useCallback(async () => {
    try {
      const res = await axios.get("/user-browse/mylist");
      console.log("res =", res);
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
      {/* <NavbarAdult setSearch={setSearch} /> */}

      <div className="bg-black h-full pr-10 pl-10 pb-8 pt-8">
        <div className="grid grid-cols-6 gap-3  bg-fixed ">
          {myList &&
            myList?.map((vdo, i) => {
              return (
                <div key={i}>
                  <video
                    className="rounded-md pb-8 pt-8 "
                    src={vdo.movies.trailer}
                    alt="Mockup"
                  />
                  <div className="text-white">{vdo.movies.title}</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default MyListPage;
