// import Footer from "../layout/Footer";
// import NetflixBG1 from "../assets/NetflixBG1.png";
import HeaderHomePage from "../layout/HeaderHomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../layout/Footer";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  checkEmailInDatabaseAction,
  resetState,
} from "../store/slice/authSlice";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitForm = (data) => {
    dispatch(checkEmailInDatabaseAction(data))
      .unwrap()
      .then((user) => {
        if (user?.emailKey?.email) {
          dispatch(resetState());
          navigate("/login");
        }
      })
      .catch(() => {
        dispatch(resetState());
        navigate("/signup");
      });
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-[url('/NetflixBG1.png')] bg-cover bg-center flex-1">
        <div className="w-full h-full items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-black">
          <HeaderHomePage />
          <div className="h-full flex items-center justify-center mx-36 pb-10">
            <div className=" text-white text-center">
              <div className="text-3xl font-bold">
                The biggest local and international hits. The best stories. All
                streaming here.
              </div>

              <div className="py-2">Watch anywhere.Cancel anytime.</div>
              <div className="py-2 text-sm">
                Ready to watch? Enter your email to create or restart your
                membership.
              </div>
              <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div className="flex justify-center">
                  <div className=" text-white opacity-80 bg-gray-950  ">
                    {/* <input
                      className={`  h-full rounded-md  border-2  bg-transparent px-3 outline-none text-white "
                        }`}
                      // placeholder="email"
                      // {...register("email", {
                      //   required: "Email is required.",
                      //   minLength: {
                      //     value: 5,
                      //     message:
                      //       "Email should be between 5 and 50 characters",
                      //   },
                      //   pattern: {
                      //     value: /\S+@\S+\.\S+/,
                      //     message: "Entered value does not match email format",
                      //   },
                      // })}
                    /> */}
                  </div>

                  <button className=" font-light bg-red-600 py-1 px-4 rounded-md hover:bg-red-800">
                    Get Started
                    <FontAwesomeIcon icon={faAngleRight} className="ml-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
