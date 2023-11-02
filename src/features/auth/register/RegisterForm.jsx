import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerAction, resetState } from "../../../store/slice/authSlice";
import { addAccessToken } from "../../../utils/local-storage";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userError = useSelector((state) => state.user.error);
    const userData = useSelector((state) => state.user.data);

    
    const handleSubmitForm = (data) => {
        dispatch(registerAction(data)).unwrap().then(user=>{
            if(userData){
                addAccessToken(user.accessToken)
                navigate("/package")
            }

        })
    };

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="flex flex-col  gap-1 ">
                <input
                    className={`block w-full rounded-[3px] px-3 py-3 border border-neutral-500 outline-none
          focus:ring ${errors.email ? "focus:ring focus:ring-black ring-offset-4" : "focus:ring-[2px]  focus:ring-black ring-offset-2"
                        }`}
                    placeholder="email"
                    {...register("email", {
                        onChange: () => { return dispatch(resetState()) },
                        required: "Email is required.",
                        minLength: {
                            value: 5,
                            message: "Email should be between 5 and 50 characters",
                        },
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format",
                        },
                    })}
                />
                <div>

                    {errors ? (<>{errors.email && (<p className="text-red-500">{errors.email.message}</p>)}</>)
                        :
                        (<>
                            {userError?.message}
                        </>
                        )}


                    <div className="text-red-500 flex items-start">{userError?.message}</div>
                </div>
                <input
                    className={`block w-full rounded-[3px] px-3 py-3 border border-neutral-500 outline-none
          focus:ring ${errors.password ? "focus:ring focus:ring-black ring-offset-4" : "focus:ring-[2px]  focus:ring-black ring-offset-2"
                        }`}
                    placeholder="password"
                    type="password"
                    {...register("password", {
                        required: "Password is required.",
                        minLength: {
                            value: 5,
                            message: "Password should be between 5 and 50 characters",
                        },
                    })}
                />
                <div>
                    {errors.password && (
                        <p className="text-red-500">{errors.password.message}</p>
                    )}
                </div>
                <button className="bg-[#E50914] w-full h-16 text-2xl font-light text-white rounded-md">
                    Next
                </button>
            </div>
        </form>
    );
}
