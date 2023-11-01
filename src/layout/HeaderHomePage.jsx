import { useNavigate } from "react-router-dom";

export default function HeaderHomePage() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between bg-opacity px-10  ">
      <img
      onClick = {() =>{
        return navigate("/")
      }}
        className="h-20 cursor-pointer "
        src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
      ></img>

      <button 
      onClick ={() =>{
        navigate('/login')
      }}
      className=" self-center bg-red-600  px-5 py-1 rounded-md hover:bg-red-800 cursor-pointer text-white">
        Sign in
      </button>
    </div>
  );
}
