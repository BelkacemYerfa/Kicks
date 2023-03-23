export const Footer = () => {
  return (
    <footer className="realtive">
      <section className="pt-6 px-4 pb-16 md:px-[72px] md:py-16 bg-ShopBtn rounded-t-[2rem] md:rounded-t-[3rem] flex flex-col gap-y-8 md:flex-row items-start md:items-center justify-between w-full">
        <div className="flex flex-col gap-y-4  justify-center w-full">
          <h2 className="uppercase text-[32px] md:text-[48px] font-semibold text-white w-full md:w-[70%]">
            Join our KicksPlus Club & get 15% off
          </h2>
          <p className="font-semibold text-xl text-white">
            Sign up for free! Join the community.
          </p>
          <form action="" className="flex items-center gap-x-2">
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="Email Address"
              className="text-white text-xl outline-none w-1/2 bg-transparent rounded-lg py-3 px-3 border border-solid border-white"
            />
            <button
              type="submit"
              className="uppercase text-white px-5 py-4 bg-ViewDetails rounded-lg"
            >
              submit
            </button>
          </form>
        </div>
        <div className="svgHolder">
          <svg
            width="351"
            height="88"
            viewBox="0 0 351 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M88.074 87.9999C87.1855 87.9999 86.4182 87.674 85.772 87.0221C85.1258 86.3703 84.8027 85.5962 84.8027 84.6999V5.74434C84.8027 4.84804 85.1258 4.07397 85.772 3.42211C86.4182 2.77026 87.1855 2.44434 88.074 2.44434H112.791C113.679 2.44434 114.446 2.77026 115.093 3.42211C115.739 4.07397 116.062 4.84804 116.062 5.74434V84.6999C116.062 85.5962 115.739 86.3703 115.093 87.0221C114.446 87.674 113.679 87.9999 112.791 87.9999H88.074Z"
              fill="white"
            />
            <path
              d="M3.27132 86.7777C2.38281 86.7777 1.61546 86.4518 0.969279 85.7999C0.323093 85.1481 0 84.374 0 83.4777V4.52217C0 3.62587 0.323093 2.8518 0.969279 2.19995C1.61546 1.54809 2.38281 1.22217 3.27132 1.22217H26.4128C27.3013 1.22217 28.0687 1.54809 28.7149 2.19995C29.3611 2.8518 29.6842 3.62587 29.6842 4.52217V28.7222L43.3752 3.91106C43.7791 3.25921 44.358 2.64809 45.1388 2.07772C45.9061 1.50735 46.9292 1.22217 48.2216 1.22217H74.9979C75.7249 1.22217 76.3441 1.49377 76.8826 2.00982C77.4077 2.53945 77.6634 3.16414 77.6634 3.91106C77.6634 4.39995 77.5423 4.84809 77.3 5.2555L55.4912 42.1666L79.3597 82.7444C79.602 83.0703 79.7232 83.5185 79.7232 84.0888C79.7232 84.8222 79.4539 85.4604 78.9423 85.9901C78.4173 86.5197 77.7981 86.7777 77.0576 86.7777H49.4332C47.8177 86.7777 46.6196 86.3975 45.8657 85.6098C45.0984 84.8357 44.6272 84.2925 44.4656 83.9666L29.6842 57.3222V83.4777C29.6842 84.374 29.3611 85.1481 28.7149 85.7999C28.0687 86.4518 27.3013 86.7777 26.4128 86.7777H3.27132Z"
              fill="white"
            />
            <path
              d="M161.304 88C153.55 88 146.684 86.8593 140.707 84.5778C134.73 82.2963 129.978 78.7111 126.464 73.8222C122.951 68.9333 121.026 62.6185 120.716 54.8778C120.635 51.537 120.595 47.9519 120.595 44.1222C120.595 40.2926 120.635 36.6259 120.716 33.1222C121.039 25.5444 122.991 19.3111 126.585 14.4222C130.18 9.53333 134.986 5.90741 141.003 3.54444C147.021 1.18148 153.793 0 161.304 0C166.474 0 171.455 0.597531 176.274 1.76543C181.08 2.94691 185.415 4.80741 189.292 7.33333C193.169 9.85926 196.252 13.1049 198.554 17.0432C200.856 20.9951 202.041 25.7481 202.135 31.2889C202.135 32.0222 201.866 32.6605 201.354 33.1901C200.829 33.7198 200.21 33.9778 199.47 33.9778H174.753C173.461 33.9778 172.505 33.7198 171.899 33.1901C171.293 32.6605 170.755 31.7506 170.27 30.4333C169.382 27.8259 168.17 26.0741 166.635 25.1778C165.101 24.2815 163.283 23.8333 161.183 23.8333C158.518 23.8333 156.391 24.5531 154.816 25.979C153.241 27.4049 152.366 29.9988 152.204 33.7333C151.962 40.4148 151.962 47.2593 152.204 54.2667C152.366 58.0148 153.241 60.6086 154.816 62.021C156.391 63.4469 158.518 64.1667 161.183 64.1667C163.283 64.1667 165.114 63.6778 166.689 62.7C168.264 61.7222 169.449 60.0111 170.27 57.5667C170.674 56.1815 171.199 55.2444 171.845 54.7556C172.492 54.2667 173.461 54.0222 174.753 54.0222H199.47C200.197 54.0222 200.816 54.2938 201.354 54.8099C201.88 55.3395 202.135 55.9642 202.135 56.7111C202.055 62.2518 200.87 67.0049 198.554 70.9568C196.252 74.9086 193.169 78.1543 189.292 80.6667C185.415 83.1926 181.067 85.0531 176.274 86.221C171.455 87.4025 166.474 88 161.304 88Z"
              fill="white"
            />
            <path
              d="M273.713 82.7444L249.845 42.1666L271.653 5.2555C271.896 4.84809 272.017 4.39995 272.017 3.91106C272.017 3.17772 271.761 2.55303 271.236 2.0234C270.711 1.49377 270.078 1.22217 269.351 1.22217H242.575C241.283 1.22217 240.26 1.50735 239.492 2.07772C238.725 2.64809 238.133 3.25921 237.729 3.91106L225.613 25.8703L224.038 28.7222V4.52217C224.038 3.62587 223.715 2.8518 223.068 2.19995C222.422 1.54809 221.655 1.22217 220.766 1.22217H197.625C196.736 1.22217 195.969 1.54809 195.323 2.19995C195.242 2.29501 195.161 2.37649 195.08 2.47155C195 2.56661 194.932 2.66167 194.879 2.75674C194.811 2.8518 194.757 2.96044 194.704 3.0555C194.65 3.16414 194.609 3.2592 194.569 3.36785C198.742 6.26044 202.162 9.92711 204.706 14.2999C207.466 19.053 208.92 24.7432 209.014 31.2074C209.014 33.4481 208.179 35.4851 206.658 37.0333C205.123 38.5678 203.104 39.4098 200.963 39.4098H194.354V48.5901H200.963C203.104 48.5901 205.123 49.432 206.645 50.9666C208.179 52.5283 209.014 54.5654 209.014 56.711C208.92 63.2567 207.466 68.9469 204.706 73.6999C202.162 78.0728 198.742 81.7394 194.569 84.632C194.609 84.7407 194.65 84.8493 194.704 84.9444C194.811 85.1481 194.932 85.3518 195.08 85.5283C195.161 85.6234 195.242 85.7049 195.323 85.7999C195.969 86.4518 196.736 86.7777 197.625 86.7777H220.766C221.655 86.7777 222.422 86.4518 223.068 85.7999C223.715 85.1481 224.038 84.374 224.038 83.4777V57.3222L225.613 60.1604L238.819 83.9666C238.981 84.2925 239.452 84.8493 240.219 85.6234C240.987 86.3975 242.171 86.7777 243.787 86.7777H271.411C272.138 86.7777 272.771 86.5197 273.296 85.9901C273.821 85.4604 274.077 84.8222 274.077 84.0888C274.077 83.5185 273.956 83.0703 273.713 82.7444Z"
              fill="white"
            />
            <path
              d="M310.775 88C301.809 88 294.418 86.7778 288.602 84.3333C282.787 81.8889 278.425 78.6704 275.517 74.6778C272.609 70.6852 271.075 66.4481 270.913 61.9667C270.913 61.2333 271.169 60.6086 271.694 60.0654C272.219 59.5358 272.838 59.2778 273.565 59.2778H296.586C297.878 59.2778 298.861 59.4543 299.561 59.821C300.247 60.1876 300.988 60.7037 301.809 61.342C302.617 61.9123 303.438 62.4284 304.286 62.863C305.134 63.3111 306.103 63.637 307.194 63.8407C308.284 64.0444 309.469 64.1531 310.775 64.1531C313.521 64.1531 315.715 63.8407 317.371 63.2296C319.027 62.6185 319.862 61.7901 319.862 60.7309C319.862 59.7531 319.39 58.9383 318.462 58.2864C317.533 57.6346 315.931 57.0506 313.669 56.521C311.407 55.9914 308.257 55.4753 304.219 55C297.837 54.1037 292.305 52.5963 287.62 50.4778C282.935 48.3593 279.314 45.4531 276.783 41.7321C274.238 38.0247 272.973 33.4753 272.973 28.0975C272.973 22.5568 274.521 17.6679 277.631 13.4309C280.74 9.19383 285.062 5.89383 290.595 3.53086C296.128 1.18148 302.576 0 309.927 0C315.985 0 321.356 0.787654 326.041 2.37654C330.726 3.96543 334.684 6.04321 337.914 8.60988C341.145 11.1765 343.609 13.9333 345.305 16.8667C347.001 19.8 347.89 22.6111 347.971 25.3C347.971 26.0333 347.701 26.6716 347.19 27.2012C346.665 27.7309 346.073 27.9889 345.426 27.9889H321.194C320.064 27.9889 319.148 27.8259 318.475 27.5C317.788 27.1741 317.075 26.6852 316.348 26.0333C315.944 25.6259 315.19 25.1642 314.1 24.621C313.009 24.0914 311.623 23.8333 309.913 23.8333C307.894 23.8333 306.413 24.1457 305.497 24.7568C304.569 25.3679 304.097 26.2099 304.097 27.2556C304.097 27.9889 304.461 28.6815 305.188 29.3333C305.915 29.9852 307.248 30.5556 309.186 31.0444C311.125 31.5333 313.911 32.0222 317.546 32.5111C325.623 33.4889 332.099 35.0642 336.999 37.2099C341.886 39.3691 345.44 42.2481 347.661 45.8333C349.882 49.4185 351 53.8593 351 59.1556C351 65.1037 349.236 70.237 345.723 74.5556C342.209 78.8741 337.416 82.1876 331.358 84.5099C325.3 86.8321 318.448 88 310.775 88Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
      <section className="-translate-y-[5%] md:-translate-y-[9%] bg-ViewDetails flex justify-center flex-col pt-6 md:pt-10 rounded-[2rem] md:rounded-[3rem]">
        <div className="flex gap-y-10 flex-col md:flex-row justify-between px-4 md:px-10">
          <div>
            <h2 className="text-[36px] text-PannelBtn font-semibold ">
              About us
            </h2>
            <p className="text-white text-xl font-semibold">
              We are the biggest hyperstore in the universe. <br /> We got you
              all cover with our exclusive <br /> collections and latest drops.
            </p>
          </div>
          <div>
            <h2 className="text-[36px] text-PannelBtn font-semibold ">
              Categories
            </h2>
            <ul className="flex flex-col gap-y-2 p-0">
              <li className="text-white text-xl font-semibold">Runners</li>
              <li className="text-white text-xl font-semibold">Sneakers</li>
              <li className="text-white text-xl font-semibold">BasketBall</li>
              <li className="text-white text-xl font-semibold">Outdoor</li>
              <li className="text-white text-xl font-semibold">Golf</li>
              <li className="text-white text-xl font-semibold">Hiking</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[36px] text-PannelBtn font-semibold ">
              Company
            </h2>
            <ul className="flex flex-col gap-y-2 p-0">
              <li className="text-white text-xl font-semibold">About</li>
              <li className="text-white text-xl font-semibold">Contact</li>
              <li className="text-white text-xl font-semibold">Blogs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[36px] text-PannelBtn font-semibold ">
              Follow Us
            </h2>
            <ul className="flex items-center gap-x-5 p-0">
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                    fill="#E7E7E3"
                  />
                </svg>
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                    fill="#E7E7E3"
                  />
                </svg>
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                    fill="#E7E7E3"
                  />
                </svg>
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6002 5.82C16.6002 5.82 17.1102 6.32 16.6002 5.82C15.9166 5.03962 15.5399 4.03743 15.5402 3H12.4502V15.4C12.4263 16.071 12.143 16.7066 11.6599 17.1729C11.1768 17.6393 10.5316 17.8999 9.86016 17.9C8.44016 17.9 7.26016 16.74 7.26016 15.3C7.26016 13.58 8.92016 12.29 10.6302 12.82V9.66C7.18016 9.2 4.16016 11.88 4.16016 15.3C4.16016 18.63 6.92016 21 9.85016 21C12.9902 21 15.5402 18.45 15.5402 15.3V9.01C16.7932 9.90985 18.2975 10.3926 19.8402 10.39V7.3C19.8402 7.3 17.9602 7.39 16.6002 5.82Z"
                    fill="#E7E7E3"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 md:px-10 md:mt-10 translate-y-[30%] md:translate-y-0 w-full flex items-center justify-center">
          <svg
            width="1200"
            height="200"
            viewBox="0 0 1262 208"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M316.665 313.662C313.471 313.662 310.712 312.5 308.388 310.177C306.065 307.854 304.903 305.094 304.903 301.9V20.4751C304.903 17.2804 306.065 14.5213 308.388 12.1979C310.712 9.87448 313.471 8.71277 316.665 8.71277H405.532C408.727 8.71277 411.486 9.87448 413.809 12.1979C416.132 14.5213 417.294 17.2804 417.294 20.4751V301.9C417.294 305.094 416.132 307.854 413.809 310.177C411.486 312.5 408.727 313.662 405.532 313.662H316.665Z"
              fill="white"
            />
            <path
              d="M11.7618 309.306C8.56725 309.306 5.80831 308.144 3.48498 305.82C1.16166 303.497 0 300.738 0 297.543V16.1187C0 12.9239 1.16166 10.1649 3.48498 7.84146C5.80831 5.51803 8.56725 4.35632 11.7618 4.35632H94.9658C98.1604 4.35632 100.919 5.51803 103.243 7.84146C105.566 10.1649 106.728 12.9239 106.728 16.1187V102.376L155.953 13.9404C157.405 11.617 159.486 9.43881 162.294 7.40582C165.053 5.37282 168.731 4.35632 173.378 4.35632H269.651C272.264 4.35632 274.491 5.32442 276.427 7.16379C278.315 9.05157 279.234 11.2782 279.234 13.9404C279.234 15.683 278.799 17.2804 277.927 18.7325L199.515 150.296L285.333 294.929C286.204 296.091 286.64 297.688 286.64 299.721C286.64 302.335 285.672 304.61 283.833 306.498C281.945 308.386 279.718 309.306 277.056 309.306H177.734C171.926 309.306 167.618 307.95 164.908 305.143C162.149 302.384 160.454 300.448 159.874 299.286L106.728 204.316V297.543C106.728 300.738 105.566 303.497 103.243 305.82C100.919 308.144 98.1604 309.306 94.9658 309.306H11.7618Z"
              fill="white"
            />
            <path
              d="M579.959 313.662C552.079 313.662 527.394 309.596 505.903 301.464C484.413 293.332 467.326 280.553 454.693 263.128C442.06 245.702 435.139 223.194 434.025 195.603C433.735 183.696 433.59 170.917 433.59 157.267C433.59 143.617 433.735 130.547 434.025 118.059C435.187 91.0491 442.205 68.8314 455.129 51.4057C468.052 33.9801 485.332 21.056 506.968 12.6336C528.604 4.2112 552.951 0 579.959 0C598.546 0 616.455 2.1298 633.783 6.2926C651.063 10.5038 666.648 17.1352 680.588 26.1385C694.528 35.1418 705.612 46.7105 713.889 60.7478C722.166 74.8336 726.425 91.7752 726.764 111.524C726.764 114.138 725.796 116.413 723.957 118.301C722.069 120.189 719.843 121.108 717.18 121.108H628.313C623.667 121.108 620.23 120.189 618.052 118.301C615.874 116.413 613.938 113.17 612.195 108.475C609.001 99.1811 604.644 92.9369 599.127 89.7422C593.609 86.5475 587.074 84.9502 579.524 84.9502C569.94 84.9502 562.292 87.5156 556.629 92.5981C550.966 97.6806 547.82 106.926 547.239 120.237C546.368 144.052 546.368 168.448 547.239 193.425C547.82 206.785 550.966 216.03 556.629 221.064C562.292 226.147 569.94 228.712 579.524 228.712C587.074 228.712 593.657 226.969 599.32 223.484C604.983 219.999 609.243 213.9 612.195 205.187C613.647 200.25 615.535 196.91 617.858 195.168C620.182 193.425 623.667 192.554 628.313 192.554H717.18C719.794 192.554 722.021 193.522 723.957 195.361C725.845 197.249 726.764 199.476 726.764 202.138C726.474 221.887 722.214 238.829 713.889 252.914C705.612 267 694.528 278.569 680.588 287.524C666.648 296.527 651.014 303.158 633.783 307.321C616.455 311.532 598.546 313.662 579.959 313.662Z"
              fill="white"
            />
            <path
              d="M984.121 294.929L898.303 150.296L976.716 18.7325C977.587 17.2804 978.022 15.683 978.022 13.9404C978.022 11.3266 977.103 9.09998 975.215 7.2122C973.327 5.32442 971.052 4.35632 968.439 4.35632H872.166C867.519 4.35632 863.841 5.37282 861.082 7.40582C858.323 9.43881 856.193 11.617 854.741 13.9404L811.179 92.2108L805.516 102.376V16.1187C805.516 12.9239 804.354 10.1649 802.031 7.84146C799.707 5.51803 796.949 4.35632 793.754 4.35632H710.55C707.355 4.35632 704.596 5.51803 702.273 7.84146C701.983 8.18029 701.692 8.47072 701.402 8.80955C701.111 9.14838 700.869 9.48722 700.676 9.82605C700.434 10.1649 700.24 10.5521 700.047 10.891C699.853 11.2782 699.708 11.617 699.563 12.0043C714.567 22.3144 726.862 35.3837 736.01 50.97C745.932 67.9116 751.16 88.1932 751.498 111.234C751.498 119.221 748.498 126.481 743.028 131.999C737.51 137.469 730.25 140.47 722.554 140.47H698.788V173.192H722.554C730.25 173.192 737.51 176.193 742.98 181.663C748.498 187.229 751.498 194.49 751.498 202.138C751.16 225.469 745.932 245.75 736.01 262.692C726.862 278.278 714.567 291.347 699.563 301.658C699.708 302.045 699.853 302.432 700.047 302.771C700.434 303.497 700.869 304.223 701.402 304.852C701.692 305.191 701.983 305.482 702.273 305.82C704.596 308.144 707.355 309.306 710.55 309.306H793.754C796.949 309.306 799.707 308.144 802.031 305.82C804.354 303.497 805.516 300.738 805.516 297.543V204.316L811.179 214.432L858.662 299.286C859.243 300.448 860.937 302.432 863.696 305.191C866.455 307.95 870.714 309.306 876.522 309.306H975.844C978.458 309.306 980.733 308.386 982.621 306.498C984.508 304.61 985.428 302.335 985.428 299.721C985.428 297.688 984.992 296.091 984.121 294.929Z"
              fill="white"
            />
            <path
              d="M1117.37 313.662C1085.14 313.662 1058.56 309.306 1037.65 300.593C1016.74 291.88 1001.06 280.408 990.606 266.177C980.151 251.946 974.634 236.844 974.053 220.87C974.053 218.257 974.972 216.03 976.86 214.094C978.748 212.206 980.974 211.286 983.588 211.286H1066.36C1071 211.286 1074.54 211.916 1077.05 213.222C1079.52 214.529 1082.18 216.369 1085.14 218.644C1088.04 220.677 1090.99 222.516 1094.04 224.065C1097.09 225.662 1100.58 226.824 1104.5 227.55C1108.42 228.276 1112.68 228.664 1117.37 228.664C1127.25 228.664 1135.14 227.55 1141.09 225.372C1147.04 223.194 1150.04 220.241 1150.04 216.466C1150.04 212.98 1148.35 210.076 1145.01 207.753C1141.67 205.429 1135.91 203.348 1127.78 201.46C1119.65 199.572 1108.32 197.733 1093.8 196.039C1070.86 192.844 1050.96 187.471 1034.12 179.92C1017.28 172.369 1004.26 162.01 995.156 148.747C986.008 135.533 981.458 119.317 981.458 100.149C981.458 80.4001 987.025 62.9745 998.206 47.8722C1009.39 32.77 1024.92 21.0076 1044.82 12.5852C1064.71 4.2112 1087.9 0 1114.32 0C1136.1 0 1155.42 2.80747 1172.26 8.47081C1189.11 14.1342 1203.34 21.5401 1214.95 30.6885C1226.57 39.837 1235.43 49.6632 1241.53 60.1186C1247.62 70.574 1250.82 80.5937 1251.11 90.1779C1251.11 92.7917 1250.14 95.0667 1248.3 96.9545C1246.41 98.8423 1244.28 99.762 1241.96 99.762H1154.84C1150.77 99.762 1147.48 99.1811 1145.06 98.0194C1142.59 96.8577 1140.03 95.1151 1137.41 92.7917C1135.96 91.3396 1133.25 89.6938 1129.33 87.7576C1125.41 85.8698 1120.42 84.9502 1114.27 84.9502C1107.01 84.9502 1101.69 86.0635 1098.4 88.2417C1095.06 90.4199 1093.37 93.421 1093.37 97.1481C1093.37 99.762 1094.67 102.231 1097.29 104.554C1099.9 106.877 1104.69 108.91 1111.66 110.653C1118.63 112.396 1128.65 114.138 1141.72 115.881C1170.76 119.366 1194.04 124.981 1211.66 132.629C1229.23 140.325 1242.01 150.587 1250 163.366C1257.98 176.145 1262 191.973 1262 210.851C1262 232.052 1255.66 250.349 1243.03 265.742C1230.39 281.134 1213.16 292.945 1191.38 301.222C1169.6 309.499 1144.96 313.662 1117.37 313.662Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </footer>
  );
};