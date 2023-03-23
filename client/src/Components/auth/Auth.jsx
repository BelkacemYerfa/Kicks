import { lazy, useState, useTransition } from "react";
import { Login } from "./LogIn/Login";
const SignUp = lazy(() => import("./SignIn/SignUp"));

export const Auth = () => {
  const [LogForm, setLogForm] = useState(false);
  const [, startTransition] = useTransition();

  const handleToggleState = () => {
    startTransition(() => {
      setLogForm(!LogForm);
    });
  };
  return (
    <div className="w-[95%] flex flex-col md:flex-row gap-y-6 md:justify-between">
      <div className="w-full md:w-1/2">
        {!LogForm ? (
          <>
            <Login />
            <br />
            <div className="md:px-10">
              <u onClick={handleToggleState} className="cursor-pointer">
                You don't have an account
              </u>
            </div>
          </>
        ) : (
          <>
            <SignUp />
            <br />
            <div className="md:px-10">
              <u onClick={handleToggleState} className="cursor-pointer">
                Already have an account
              </u>
            </div>
          </>
        )}
      </div>
      <div className="bg-white py-6 px-4 md:px-6 rounded-2xl w-full md:w-1/2 h-fit">
        <div className="text-ViewDetails">
          <h2 className="text-[36px] font-semibold ">
            Join Kicks Club Get Rewarded Today.
          </h2>
          <br />
          <p className="text-base font-semibold">
            As kicks club member you get rewarded with what you love for doing
            what you love. Sign up today and receive immediate access to these
            Level 1 benefits:
          </p>
          <br />
          <ul className="flex flex-col gap-y-2 text-base font-semibold px-5">
            <li className="list-disc">Free shipping​</li>
            <li className="list-disc">
              A 15% off voucher for your next purchase​
            </li>
            <li className="list-disc">
              Access to Members Only products and sales​
            </li>
            <li className="list-disc">
              Access to adidas Running and Training apps​
            </li>
            <li className="list-disc">Special offers and promotions​</li>
          </ul>
          <br />
          <p className="text-base font-semibold">
            Join now to start earning points, reach new levels and unlock more
            rewards and benefits from adiClub.​
          </p>
          <br />
          <button className="p-4 uppercase flex items-center justify-between font-medium text-sm w-full bg-ViewDetails text-white rounded-lg">
            <span>Join the club</span>
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
        </div>
      </div>
    </div>
  );
};
