import { useState, useEffect } from "react";
import NavbarAdult from "../components/Browse/NavbarAdult";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const mockUpVdo = [
  {
    id: 1,
    title: "Movie1",
    src: "https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596763/comedy/d4gpv9gp8nof7reqij5d.mp4",
  },
  {
    id: 2,
    title: "Serie3",
    src: "https://res.cloudinary.com/diyiw4pvv/video/upload/v1698585618/samples/elephants.mp4",
  },
  {
    id: 3,
    title: "Serie4",
    src: "https://res.cloudinary.com/diyiw4pvv/video/upload/v1698595946/horror/qkkeqbqxmarksnll0jiw.mp4",
  },
  {
    id: 4,
    title: "Serie1",
    src: "https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596763/comedy/d4gpv9gp8nof7reqij5d.mp4",
  },
  {
    id: 5,
    title: "Serie4",
    src: "https://res.cloudinary.com/diyiw4pvv/video/upload/v1698585621/samples/cld-sample-video.mp4",
  },
  {
    id: 6,
    title: "Movie2",
    src: "https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596702/sport/xgramqrcb5rpl06ktsvi.mp4",
  },
  {
    id: 7,
    title: "Movie6",
    src: "https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596561/romantic/vd0ipr9lhhxhd5vaarly.mp4",
  },
  {
    id: 8,
    title: "Movie5",
    src: "https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596564/romantic/web19jdfwzzjvss41ekq.mp4",
  },
];

// XxXXXXXXXX

// const SearchPage = () => {
//   const navigate = useNavigate();
//   const [movie, setMovie] = useState(null);

//   let search = window.location.search;
// };

// const getMovie = useCallback(async () => {
//   const res = await axios.get(`/movie?trailer=${trailer || []}`);
//   setMovie(res?.data?.movie);
// }, []);

////  XXXXXXXXXXXXX

export default function SearchPage() {
  //   const navigate = useNavigate();

  const [search, setSearch] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (search) {
      const filterMovie = mockUpVdo.filter((vdo) => {
        const lowerTitle = vdo.title.toLocaleLowerCase();
        const lowerSearch = search.toLocaleLowerCase();

        if (lowerTitle.includes(lowerSearch)) {
          return vdo;
        }
      });

      setMovie(filterMovie);
    } else {
      //   navigate("/browse");
    }
  }, []);
  // }, [navigate, search]);

  return (
    <>
      <NavbarAdult setSearch={setSearch} />

      <div className="bg-black h-full pr-10 pl-10 pb-8 pt-8">
        <div className="flex py-2">
          <div className="text-[#808080]">more to explore:</div>
          <div className="text-[#ffffff] pl-2">{search}</div>
        </div>
        <div className="grid grid-cols-6 gap-3  bg-fixed ">
          {movie &&
            movie.map((vdo, i) => {
              return (
                <div key={i}>
                  <video
                    className="rounded-md pb-8 pt-8 "
                    src={vdo.src}
                    alt="Mockup"
                  />
                  <div className="text-white">{vdo.title}</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
