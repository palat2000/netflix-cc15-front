function NavbarAdult() {
  return (
    <>
      <div className="flex justify-between items-center text-xs bg-black">
        <div className="flex justify-items-start items-center text-xs mx-10 text-white">
          <img
            className="h-8 w-auto"
            src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          ></img>
          <div className="mx-5 ml-10">Home</div>
          <div className="mx-5">TV Shows</div>
          <div className="mx-5">Movie</div>
          <div className="mx-5">My List</div>
        </div>
        <div className="text-white mx-10">Kids</div>
      </div>
    </>
  );
}

export default NavbarAdult;
