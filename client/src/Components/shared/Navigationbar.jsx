import logo from "../../assets/userlogo.svg";
import searchLogo from "../../assets/searchLogo.svg";
import toggle from "../../assets/toggle.svg";
import { useEffect, useState, useRef } from "react";
import { ChoiceDropDown } from "./NavComponents/ChoiceDropDown";
import { mediaPhone } from "../../static/mediaQueries";
import dropSvg from "../../assets/dropdonw.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Navigationbar = () => {
  const [Toggle, setToggle] = useState(false);
  const [SearchToggle, setSearchToggle] = useState(false);
  const ToggleDrop = useRef(null);
  const SearchToggleRef = useRef(null);
  const handleToggleState = () => {
    setToggle(!Toggle);
  };
  useEffect(() => {
    mediaPhone.addEventListener("change", () => {
      setToggle(false);
    });
    window.addEventListener("click", (e) => {
      if (!SearchToggleRef.current.contains(e.target)) {
        setSearchToggle(false);
      } else {
        setSearchToggle(true);
      }
    });
  }, []);

  return (
    <nav className="flex w-full items-center justify-center duration-300 ease-in-out">
      <div className="flex w-[95%] items-center justify-between rounded-t-3xl bg-white p-4 md:rounded-3xl md:p-8">
        <div className=" relative flex items-center gap-x-10 font-semibold text-ViewDetails ">
          <div
            className="flex h-10 w-10 cursor-pointer items-center justify-center md:hidden"
            onClick={handleToggleState}
          >
            <img
              onClick={() => {
                console.log(actions.setUser(10));
                console.log(state);
              }}
              src={toggle}
              className="h-10 w-10"
              alt="toggle"
            />
          </div>
          <ul className="absolute m-0 hidden flex-col items-center gap-y-3 gap-x-10 md:relative md:flex md:flex-row">
            <li>
              <div className="group flex flex-col">
                <a href="/">New Drops 🔥</a>
                <div
                  className="h-[2px] w-0 bg-ViewDetails duration-300 ease-in-out
             group-hover:w-full"
                ></div>
              </div>
            </li>
            <li>
              <div className="group flex flex-col">
                <div className="flex items-center gap-x-[2px]">
                  <a href="/">Men</a>
                  <img src={dropSvg} alt="" />
                </div>
                <div
                  className="h-[2px] w-0 bg-ViewDetails duration-300 ease-in-out
             group-hover:w-full"
                ></div>
              </div>
            </li>
            <li>
              <div className="group flex flex-col">
                <div className="flex items-center gap-x-[2px]">
                  <a href="/">Woman</a>
                  <img src={dropSvg} alt="" />
                </div>
                <div
                  className="h-[2px] w-0 bg-ViewDetails duration-300 ease-in-out
             group-hover:w-full"
                ></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="duration-300 ease-in-out">
          <motion.svg
            width="128"
            height="32"
            viewBox="0 0 128 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ fill: "#fff", pathLength: 0 }}
              animate={{ fill: "#232321", pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
              stroke="#FFA52F"
              strokeWidth={1}
              d="M32.1178 31.9998C31.7937 31.9998 31.5139 31.8813 31.2783 31.6442C31.0426 31.4072 30.9248 31.1257 30.9248 30.7998V2.08867C30.9248 1.76275 31.0426 1.48126 31.2783 1.24423C31.5139 1.00719 31.7937 0.888672 32.1178 0.888672H41.1312C41.4552 0.888672 41.7351 1.00719 41.9707 1.24423C42.2064 1.48126 42.3242 1.76275 42.3242 2.08867V30.7998C42.3242 31.1257 42.2064 31.4072 41.9707 31.6442C41.7351 31.8813 41.4552 31.9998 41.1312 31.9998H32.1178Z"
            />
            <motion.path
              initial={{ fill: "#fff", pathLength: 0 }}
              animate={{ fill: "#232321", pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
              stroke="#FFA52F"
              strokeWidth={1}
              d="M1.19296 31.5554C0.868945 31.5554 0.589115 31.4369 0.353469 31.1999C0.117823 30.9629 0 30.6814 0 30.3554V1.64434C0 1.31841 0.117823 1.03693 0.353469 0.799891C0.589115 0.562854 0.868945 0.444336 1.19296 0.444336H9.63203C9.95605 0.444336 10.2359 0.562854 10.4715 0.799891C10.7072 1.03693 10.825 1.31841 10.825 1.64434V10.4443L15.8177 1.42211C15.965 1.18508 16.1761 0.962854 16.4609 0.755447C16.7407 0.54804 17.1138 0.444336 17.5851 0.444336H27.3497C27.6148 0.444336 27.8406 0.543101 28.037 0.730756C28.2284 0.923348 28.3217 1.15051 28.3217 1.42211C28.3217 1.59989 28.2775 1.76285 28.1892 1.911L20.2361 15.3332L28.9403 30.0888C29.0286 30.2073 29.0728 30.3703 29.0728 30.5777C29.0728 30.8443 28.9746 31.0764 28.7881 31.269C28.5966 31.4616 28.3708 31.5554 28.1008 31.5554H18.0269C17.4378 31.5554 17.0009 31.4172 16.726 31.1308C16.4461 30.8493 16.2743 30.6517 16.2154 30.5332L10.825 20.8443V30.3554C10.825 30.6814 10.7072 30.9629 10.4715 31.1999C10.2359 31.4369 9.95605 31.5554 9.63203 31.5554H1.19296Z"
            />
            <motion.path
              initial={{ fill: "#fff", pathLength: 0 }}
              animate={{ fill: "#232321", pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
              stroke="#FFA52F"
              strokeWidth={1}
              d="M58.8232 32C55.9955 32 53.4917 31.5852 51.312 30.7556C49.1323 29.9259 47.3993 28.6222 46.118 26.8444C44.8367 25.0667 44.1346 22.7704 44.0217 19.9556C43.9923 18.7407 43.9775 17.437 43.9775 16.0444C43.9775 14.6519 43.9923 13.3185 44.0217 12.0444C44.1395 9.28889 44.8514 7.02222 46.1622 5.24444C47.473 3.46667 49.2256 2.14815 51.42 1.28889C53.6145 0.42963 56.0839 0 58.8232 0C60.7084 0 62.5248 0.217284 64.2824 0.641975C66.035 1.0716 67.6158 1.74815 69.0297 2.66667C70.4435 3.58519 71.5678 4.76543 72.4073 6.19753C73.2467 7.63457 73.6788 9.36296 73.7131 11.3778C73.7131 11.6444 73.6149 11.8765 73.4284 12.0691C73.2369 12.2617 73.0111 12.3556 72.7411 12.3556H63.7276C63.2563 12.3556 62.9078 12.2617 62.6869 12.0691C62.4659 11.8765 62.2696 11.5457 62.0928 11.0667C61.7688 10.1185 61.327 9.48148 60.7673 9.15556C60.2077 8.82963 59.5449 8.66667 58.7791 8.66667C57.807 8.66667 57.0313 8.92839 56.457 9.44691C55.8826 9.96543 55.5635 10.9086 55.5046 12.2667C55.4162 14.6963 55.4162 17.1852 55.5046 19.7333C55.5635 21.0963 55.8826 22.0395 56.457 22.5531C57.0313 23.0716 57.807 23.3333 58.7791 23.3333C59.5449 23.3333 60.2126 23.1556 60.787 22.8C61.3613 22.4444 61.7934 21.8222 62.0928 20.9333C62.2401 20.4296 62.4316 20.0889 62.6672 19.9111C62.9029 19.7333 63.2563 19.6444 63.7276 19.6444H72.7411C73.0062 19.6444 73.232 19.7432 73.4284 19.9309C73.6198 20.1235 73.7131 20.3506 73.7131 20.6222C73.6837 22.637 73.2517 24.3654 72.4073 25.8025C71.5678 27.2395 70.4435 28.4198 69.0297 29.3333C67.6158 30.2519 66.0301 30.9284 64.2824 31.3531C62.5248 31.7827 60.7084 32 58.8232 32Z"
            />
            <motion.path
              initial={{ fill: "#fff", pathLength: 0 }}
              animate={{ fill: "#232321", pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
              stroke="#FFA52F"
              strokeWidth={1}
              d="M99.8153 30.0888L91.1111 15.3332L99.0642 1.911C99.1525 1.76285 99.1967 1.59989 99.1967 1.42211C99.1967 1.15545 99.1034 0.928287 98.912 0.735694C98.7205 0.543101 98.4898 0.444336 98.2247 0.444336H88.4601C87.9888 0.444336 87.6157 0.54804 87.3359 0.755447C87.056 0.962854 86.84 1.18508 86.6927 1.42211L82.2744 9.4073L81.7 10.4443V1.64434C81.7 1.31841 81.5822 1.03693 81.3465 0.799891C81.1109 0.562854 80.8311 0.444336 80.507 0.444336H72.068C71.7439 0.444336 71.4641 0.562854 71.2285 0.799891C71.199 0.834459 71.1696 0.864089 71.1401 0.898657C71.1107 0.933225 71.0861 0.967793 71.0665 1.00236C71.0419 1.03693 71.0223 1.07643 71.0026 1.111C70.983 1.15051 70.9683 1.18508 70.9536 1.22458C72.4754 2.27643 73.7224 3.60977 74.6502 5.19989C75.6567 6.92829 76.1869 8.99742 76.2212 11.348C76.2212 12.1629 75.9168 12.9036 75.3621 13.4666C74.8024 14.0246 74.066 14.3308 73.2855 14.3308H70.875V17.669H73.2855C74.066 17.669 74.8024 17.9752 75.3572 18.5332C75.9168 19.1011 76.2212 19.8419 76.2212 20.6221C76.1869 23.0024 75.6567 25.0715 74.6502 26.7999C73.7224 28.39 72.4754 29.7233 70.9536 30.7752C70.9683 30.8147 70.983 30.8542 71.0026 30.8888C71.0419 30.9629 71.0861 31.0369 71.1401 31.1011C71.1696 31.1357 71.199 31.1653 71.2285 31.1999C71.4641 31.4369 71.7439 31.5554 72.068 31.5554H80.507C80.8311 31.5554 81.1109 31.4369 81.3465 31.1999C81.5822 30.9629 81.7 30.6814 81.7 30.3554V20.8443L82.2744 21.8764L87.0904 30.5332C87.1493 30.6517 87.3211 30.8542 87.601 31.1357C87.8808 31.4172 88.3128 31.5554 88.9019 31.5554H98.9758C99.2409 31.5554 99.4716 31.4616 99.6631 31.269C99.8546 31.0764 99.9478 30.8443 99.9478 30.5777C99.9478 30.3703 99.9037 30.2073 99.8153 30.0888Z"
            />
            <motion.path
              initial={{ fill: "#fff", pathLength: 0 }}
              animate={{ fill: "#232321", pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
              stroke="#FFA52F"
              strokeWidth={1}
              d="M113.331 32C110.062 32 107.367 31.5556 105.246 30.6667C103.125 29.7778 101.534 28.6074 100.474 27.1556C99.4135 25.7037 98.8538 24.163 98.7949 22.5333C98.7949 22.2667 98.8882 22.0395 99.0797 21.842C99.2711 21.6494 99.497 21.5556 99.7621 21.5556H108.157C108.628 21.5556 108.987 21.6198 109.242 21.7531C109.492 21.8864 109.762 22.0741 110.062 22.3062C110.356 22.5136 110.656 22.7012 110.965 22.8593C111.274 23.0222 111.628 23.1407 112.025 23.2148C112.423 23.2889 112.855 23.3284 113.331 23.3284C114.333 23.3284 115.133 23.2148 115.737 22.9926C116.341 22.7704 116.645 22.4691 116.645 22.084C116.645 21.7284 116.473 21.4321 116.135 21.1951C115.796 20.958 115.212 20.7457 114.387 20.5531C113.562 20.3605 112.413 20.1728 110.941 20C108.614 19.6741 106.596 19.1259 104.887 18.3556C103.179 17.5852 101.858 16.5284 100.935 15.1753C100.008 13.8272 99.546 12.1728 99.546 10.2173C99.546 8.20247 100.111 6.42469 101.245 4.88395C102.379 3.34321 103.955 2.14321 105.972 1.28395C107.99 0.42963 110.342 0 113.022 0C115.231 0 117.19 0.28642 118.898 0.864197C120.607 1.44198 122.05 2.19753 123.228 3.13086C124.407 4.0642 125.305 5.06667 125.924 6.13333C126.542 7.2 126.866 8.22222 126.896 9.2C126.896 9.46667 126.798 9.69877 126.611 9.89136C126.42 10.084 126.204 10.1778 125.968 10.1778H117.131C116.719 10.1778 116.385 10.1185 116.139 10C115.889 9.88148 115.629 9.7037 115.364 9.46667C115.217 9.31852 114.942 9.15062 114.544 8.95309C114.146 8.76049 113.641 8.66667 113.017 8.66667C112.281 8.66667 111.741 8.78025 111.407 9.00247C111.068 9.22469 110.896 9.53086 110.896 9.91111C110.896 10.1778 111.029 10.4296 111.294 10.6667C111.559 10.9037 112.045 11.1111 112.752 11.2889C113.459 11.4667 114.475 11.6444 115.801 11.8222C118.746 12.1778 121.108 12.7506 122.895 13.5309C124.677 14.316 125.973 15.363 126.783 16.6667C127.593 17.9704 128 19.5852 128 21.5111C128 23.6741 127.357 25.5407 126.076 27.1111C124.795 28.6815 123.047 29.8864 120.838 30.7309C118.628 31.5753 116.13 32 113.331 32Z"
            />
          </motion.svg>
        </div>
        <div className="flex items-center gap-x-[9px] md:gap-x-10">
          <div className="flex items-center gap-x-2">
            <form action="">
              <input
                ref={SearchToggleRef}
                type="search"
                name="Search"
                id="Search"
                placeholder="Search..."
                className={`flex justify-end rounded-lg bg-transparent px-3 py-2 text-2xl font-medium 
              text-ViewDetails outline-none duration-300 ease-in-out  ${
                SearchToggle
                  ? "w-full border border-solid border-FooterTitle"
                  : "w-0 border-none "
              }`}
              />
            </form>
            <button
              className="hidden h-10 w-10 cursor-pointer items-center justify-center md:flex"
              onClick={() => {
                setSearchToggle(!SearchToggle);
              }}
            >
              <img src={searchLogo} className="h-8 w-8" alt="search logo" />
            </button>
          </div>
          <Link
            to={"/auth"}
            className="flex h-10 w-10 cursor-pointer items-center justify-center"
          >
            <img src={logo} className="h-8 w-8" alt="account logo" />
          </Link>
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-PannelBtn ">
            0
          </div>
        </div>
      </div>
      {Toggle && (
        <div
          ref={ToggleDrop}
          className=" absolute top-[5.5rem] left-0 flex w-full justify-center font-semibold text-ViewDetails"
        >
          <ChoiceDropDown />
        </div>
      )}
    </nav>
  );
};
