import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserRegisterSchema } from "../../../static/validation/registerSchema";
import { redirect, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewUser } from "../../../store/createNewUser";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserRegisterSchema),
  });
  const handleGoogleAuth = async () => {
    window.open("http://localhost:5000/api/v1/auth/google", "_self");
  };
  const dispatch = useDispatch();
  const onSubmitHandler = async (data) => {
    dispatch(fetchNewUser(data));
    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className=" flex w-full flex-col gap-y-3 md:px-10 "
    >
      <h2 className="text-[32px] font-semibold text-ViewDetails">Register</h2>
      <p className="text-xl font-semibold text-ViewDetails">Sign Up With</p>
      <div className="flex items-center gap-x-6">
        <button
          name="facebookAuth"
          className="flex h-16 w-full items-center justify-center rounded-xl border border-solid border-ViewDetails"
          id="facebookAuth"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 16C32 7.1635 24.8365 0 16 0C7.1635 0 0 7.16337 0 16C0 23.986 5.851 30.6054 13.5 31.8056V20.625H9.4375V16H13.5V12.475C13.5 8.465 15.8888 6.25 19.5434 6.25C21.294 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1075C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6054 32 23.9861 32 16Z"
              fill="#1877F2"
            />
            <path
              d="M22.2281 20.625L22.9375 16H18.5V12.9987C18.5 11.7332 19.1199 10.5 21.1075 10.5H23.125V6.5625C23.125 6.5625 21.294 6.25 19.5434 6.25C15.8888 6.25 13.5 8.465 13.5 12.475V16H9.4375V20.625H13.5V31.8056C14.327 31.9352 15.1629 32.0002 16 32C16.8371 32.0002 17.673 31.9353 18.5 31.8056V20.625H22.2281Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={handleGoogleAuth}
          name="googleAuth"
          className="flex h-16 w-full items-center justify-center rounded-xl border border-solid border-ViewDetails"
          id="googleAuth"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.9847 16.2994C31.9847 14.9884 31.8758 14.0317 31.6402 13.0396H16.3187V18.9569H25.3121C25.1308 20.4274 24.1517 22.642 21.9759 24.1301L21.9454 24.3282L26.7897 27.9952L27.1254 28.0279C30.2077 25.2463 31.9847 21.1538 31.9847 16.2994Z"
              fill="#4285F4"
            />
            <path
              d="M16.3187 31.8901C20.7247 31.8901 24.4236 30.4727 27.1254 28.0279L21.9759 24.1301C20.5979 25.0691 18.7484 25.7246 16.3187 25.7246C12.0034 25.7246 8.34073 22.9432 7.0351 19.0986L6.84373 19.1145L1.80648 22.9236L1.7406 23.1025C4.4241 28.3112 9.93623 31.8901 16.3187 31.8901Z"
              fill="#34A853"
            />
            <path
              d="M7.03512 19.0987C6.69062 18.1066 6.49125 17.0435 6.49125 15.9451C6.49125 14.8466 6.69062 13.7837 7.017 12.7915L7.00787 12.5803L1.9075 8.70996L1.74062 8.78752C0.634625 10.949 0 13.3762 0 15.9451C0 18.5141 0.634625 20.9412 1.74062 23.1026L7.03512 19.0987Z"
              fill="#FBBC05"
            />
            <path
              d="M16.3187 6.16537C19.383 6.16537 21.45 7.45869 22.6286 8.53948L27.2341 4.14571C24.4056 1.57679 20.7247 0 16.3187 0C9.93623 0 4.4241 3.57875 1.7406 8.78742L7.01698 12.7915C8.34073 8.94693 12.0034 6.16537 16.3187 6.16537Z"
              fill="#EB4335"
            />
          </svg>
        </button>
        <button
          name="appleAuth"
          className="flex h-16 w-full items-center justify-center rounded-xl border border-solid border-ViewDetails"
          id="appleAuth"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.0591 30.0464C22.426 31.6295 20.6429 31.3795 18.9265 30.6296C17.11 29.8631 15.4436 29.8297 13.5271 30.6296C11.1274 31.6628 9.86093 31.3629 8.42778 30.0464C0.295471 21.6641 1.49532 8.89903 10.7275 8.43243C12.9772 8.54908 14.5437 9.6656 15.8602 9.76559C17.8266 9.36564 19.7097 8.21579 21.8094 8.36577C24.3258 8.56574 26.2255 9.56562 27.4754 11.3654C22.276 14.4817 23.5092 21.3308 28.2753 23.2472C27.3254 25.7469 26.0922 28.2299 24.0425 30.063L24.0591 30.0464ZM15.6935 8.33244C15.4436 4.61624 18.4598 1.54996 21.9261 1.25C22.4093 5.54946 18.0266 8.74905 15.6935 8.33244Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <p className="font-sembold text-xl text-ViewDetails">OR</p>
      <p className="text-[24px] font-semibold text-ViewDetails">Your Name</p>
      <div action="" className="flex flex-col gap-y-3">
        <input
          type="text"
          name="userFirstName"
          id="userFirstName"
          placeholder="FirstName"
          className="rounded-lg border border-solid border-ViewDetails bg-transparent py-[10px] px-4 outline-none"
          {...register("FirstName")}
        />
        <input
          type="text"
          name="userLastName"
          id="userLastName"
          placeholder="LastName"
          className="w-full rounded-lg border border-solid border-ViewDetails bg-transparent py-[10px] px-4 outline-none "
          {...register("LastName")}
        />
        <p className="text-[24px] font-semibold text-ViewDetails">
          Login Details
        </p>
        <div className="flex flex-col gap-y-3">
          <input
            type="email"
            name="newUserEmail"
            id="newUserEmail"
            placeholder="Email"
            className="w-full rounded-lg border border-solid border-ViewDetails bg-transparent py-[10px] px-4 outline-none "
            {...register("Email")}
          />
          <input
            type="password"
            name="newUserPassword"
            id="newUserPassword"
            placeholder="Password"
            className="w-full rounded-lg border border-solid border-ViewDetails bg-transparent py-[10px] px-4 outline-none "
            {...register("Password")}
          />
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center gap-x-2">
            <input
              {...register("CheckLongTermes")}
              type="checkbox"
              name="SiteTermes"
              id="SiteTermes"
              className="rounded bg-gray-100 text-ViewDetails focus:ring-ViewDetails "
            />
            <label htmlFor="SiteTermes">
              By clicking 'Log In' you agree to our website KicksClub Terms &
              Conditions, Kicks Privacy Notice and Terms & Conditions.
            </label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              {...register("CheckLogTermes")}
              type="checkbox"
              name="LogTermes"
              id="LogTermes"
              className="rounded bg-gray-100 text-ViewDetails focus:ring-ViewDetails "
            />
            <label htmlFor="LogTermes">
              Keep me logged in - applies to all log in options below. More info
            </label>
          </div>
        </div>
      </div>
      <button className="flex w-full items-center justify-between rounded-lg bg-ViewDetails p-4 text-sm font-medium uppercase text-white">
        <span>Register</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.375 3.5L12.875 8L8.375 12.5M12.25 8H3.125"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
};

export default SignUp;
