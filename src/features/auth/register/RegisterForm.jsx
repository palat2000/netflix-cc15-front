// import InputErrorMessage from "../InputErrorMessage";
// import RegisterButton from "./RegisterButton";

import ErrorMessage from "./ErrorMessage";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// import { useAuth } from "../../../hooks/use-auth";

// const registerSchema = Joi.object({
//   email: Joi.string().trim().email({ tlds: false }).required(),
//   password: Joi.string()
//     .pattern(/^[a-zA-Z0-9]{4,30}$/)
//     .trim()
//     .required(),
// });

// const validateRegister = (input) => {
//   // undefined | { firstName:..., lastName:...}
//   const { error } = registerSchema.validate(input, { abortEarly: false });

//   if (error) {
//     const result = error.details.reduce((acc, el) => {
//       const { message, path } = el;
//       acc[path[0]] = message;
//       return acc;
//     }, {});
//     return result;
//   }
// };

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const navigate = useNavigate();

  // const [input, setInput] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  // });

  // const [error, setError] = useState({});

  // const { register } = useAuth();

  // const handleChangeInput = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };

  const handleSubmitForm = (data) => {
    register(data).catch((err) => {
      setError(err.response?.data.fieldError, {
        type: "custom",
        message: err.response?.data.message,
      });
    });
  };

  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   const validateError = validateRegister(input);
  //   if (validateError) {
  //     return setError(validateError);
  //   }
  //   setError({});
  //   register(input).catch((err) => {
  //     console.log(err.response.data);
  //     setError({ email: err.response.data.message });
  //   });
  // };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="flex flex-col items-center gap-1 m-auto ">
        <input
          className={`block w-full rounded-[3px] px-3 py-3 border border-neutral-500 outline-none
          focus:ring ${
            errors
              ? "focus:ring focus:ring-black ring-offset-4"
              : "focus:ring-[2px]  focus:ring-black ring-offset-2"
          }
          `}
          placeholder="email"
          {...register("email", {
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
        <div className="grid grid-cols-2">
          {errors.email && <ErrorMessage message={errors.email.message} />}
        </div>
        <input
          className={`block w-full rounded-[3px] px-3 py-3 border border-neutral-500 outline-none
          focus:ring ${
            errors
              ? "focus:ring focus:ring-black ring-offset-4"
              : "focus:ring-[2px]  focus:ring-black ring-offset-2"
          }
          `}
          placeholder="password"
          {...register("password", {
            required: "password is required.",
            minLength: {
              value: 5,
              message: "password should be between 5 and 50 characters",
            },
          })}
        />
        <div className="grid grid-cols-2">
          {errors.password && (
            <ErrorMessage message={errors.password.message} />
          )}
        </div>

        <button className="bg-[#E50914] w-full h-16 text-2xl font-light text-white rounded-md">
          Next
        </button>
      </div>
    </form>
  );
}
