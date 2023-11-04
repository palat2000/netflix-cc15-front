import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function WatchPage() {
  const { movieId } = useParams()


  return (
    <>
      <div className=" w-screen h-screen bg-black flex items-center ">
        <video onEnded={() => alert('yes')} controls className="w-full h-full object-contain">
          <source src={"https://res.cloudinary.com/diyiw4pvv/video/upload/v1698595931/horror/ifx8p6t58uo958x6g5dz.mp4"}></source>
        </video>
      </div>
    </>
  )
}

export default WatchPage;
