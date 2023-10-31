export default function HeaderHomePage() {
  return (
    <div className="flex justify-between bg-opacity px-10  ">
      <img
        className="h-12"
        src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
      ></img>

      <div className=" self-center bg-red-600  px-5 py-1 rounded-md hover:bg-red-800 cursor-pointer text-white">
        Sign in
      </div>
    </div>
  );
}
