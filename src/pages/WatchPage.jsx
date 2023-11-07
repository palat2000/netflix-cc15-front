import { useRef } from "react";

function WatchPage() {

  const watchPlayer = useRef(null)

  return (
    <>
      <div className=" w-screen h-screen bg-black flex items-center ">
        <video controls disablePictureInPicture preload autoPlay ref={watchPlayer} className="w-full h-full object-contain">
          <source src={"https://res.cloudinary.com/dsldd3uhx/video/upload/v1698560049/qyjwotzxlymma0cyw6e0.mp4"}></source>
        </video>
      </div>
    </>
  )
}

export default WatchPage;
