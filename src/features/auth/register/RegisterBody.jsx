import { useNavigate } from "react-router-dom";
import HeaderHomePage from "../../../layout/HeaderHomePage";
import RegisterForm from "./RegisterForm";

export default function RegisterBody() {
  const navigate = useNavigate()
  return (
    <div className=" w-full flex flex-col justify-center md:flex md:justify-center">
      <div className="flex justify-between items-center">

      <img
      onClick = {() =>{
        return navigate("/")
      }}
      className="w-44 cursor-pointer pl-7"
      src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
      ></img>
      <button 
      onClick = {() =>{
        return navigate("/login")
      }}
      className="pr-7 text-2xl font-bold">Sign In</button>
      </div>
      <hr />
      <div className="flex m-36 justify-center">
      <div className=" flex md:w-96 md:flex md:justify-center">
        <div className="flex justify-center flex-col gap-4   md:w-10/12 md:justify-center md:block">
          <div className="gap-1 flex flex-col">
            <div className="text-xs">STEP 1 OF 2</div>
            <div className="text-3xl font-medium">
              Create a password to start your membership
            </div>
            <div className="text-base text-neutral-700">
              Just a few more steps and you're done!
            </div>
            <div className="text-base text-neutral-700">
              We hate paperwork, too.
            </div>
          </div>
          <RegisterForm />
        </div>
        </div>
      </div>
    </div>
  );
}
