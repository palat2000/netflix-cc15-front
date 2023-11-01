import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction, resetState } from "../store/slice/authSlice";
import { addAccessToken } from "../utils/local-storage";
import HeaderHomePage from "../layout/HeaderHomePage";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userError = useSelector((state) => state.user.error);
  const userData = useSelector((state) => state.user.data);

  const handleSubmitForm = (data) => {
    dispatch(loginAction(data));
    if (userData) {
      addAccessToken(r.accessToken);
      navigate("/browse");
    }
  };

  return (
    <div className=" flex justify-center md:flex-col md:items-center md:flex h-full">
      <div className="flex w-full bg-black text-white md:bg-green-500 md:flex justify-center pb-5 md:bg-cover md:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/993921bb-c0e1-4bc7-b327-ced8627c4f71/TH-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg')] h-full">
        <div className="flex self-center justify-center mt-2 flex-col w-11/12 md:bg-opacity-70 md:rounded-md md:pb-[40px] md:pt-[60px] md:bg-black md:w-[500px] md:px-[68px]  md:flex-col">
          <h1 className="mb-[10px] text-[32px] pb-5 pt-2">Sign In</h1>
          {userError && (
            <div className="p-[10px] mb-4 rounded-md text-[13px] bg-[#e87c03]">
              Incorrect password. Please try again
            </div>
          )}
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="w-full flex flex-col gap-4 ">
              <div>
                <input
                  placeholder="Email "
                  className=" bg-[#333333] border border-black outline-none p-2 w-full rounded-md"
                  {...register("Email", {
                    required: "Please enter a valid email.",
                    minLength: {
                      value: 5,
                      message: "Please enter a valid email.",
                    },
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                />
                {errors.Email && (
                  <p className="text-[#e87c03] font-[13px]">
                    {errors.Email.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className=" bg-[#333333] border border-black outline-none p-2 w-full rounded-md"
                  {...register("password", {
                    required:
                      "Your password must contain between 4 and 60 characters.",
                    minLength: {
                      value: 4,
                      message:
                        "Your password must contain between 4 and 60 characters.",
                    },
                    maxLength: {
                      value: 60,
                      message:
                        "Your password must contain between 4 and 60 characters.",
                    },
                  })}
                />

                <div>
                  {errors.password && (
                    <p className="text-[#e87c03] font-[13px]">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <button className="bg-[#e50914] text-white p-[10px] rounded-md">
                Sign In
              </button>
            </div>
          </form>
          <div className="flex pt-5 gap-1">
            <div className="text-[#737373]">New to Netflix?</div>
            <button
              onClick={() => {
                return navigate("/signup");
              }}
            >
              Sign up now.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
