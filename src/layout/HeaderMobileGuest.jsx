export default function HeaderMobileGuest() {
  return (
    <div className="flex justify-between bg-gray-900 h-5 items-center p-10">
      <img
        className="h-12  "
        src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
      ></img>

      <div className="flex gap-8">
        <div className="bg-red-600 p-1 pr-4 pl-4 rounded-md hover:bg-red-800 cursor-pointer text-white">
          Sign in
        </div>
      </div>
    </div>
  );
}
