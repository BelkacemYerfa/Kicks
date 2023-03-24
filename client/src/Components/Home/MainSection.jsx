import { motion } from "framer-motion";

export const MainSection = () => {
  return (
    <section className="">
      <motion.h2
        initial={{
          y: "100%",
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className=" text-center uppercase text-ViewDetails duration-300 ease-in-out text-[60px] sm:text-[100px] md:text-[223px] font-bold "
      >
        Do It <span className="text-ShopBtn cursor-pointer">right</span>
      </motion.h2>
      <div
        className="relative flex flex-col justify-center rounded-[64px] h-[70vh] sm:h-[90vh]  "
        id="ImageBg"
      >
        <div className="relative flex items-end h-full ">
          <button className="absolute p-6 w-[40px] h-fit rounded-br-2xl rounded-tr-2xl bg-ViewDetails text-FooterTitle text-base font-semibold ">
            <p className="flex items-center justify-center -rotate-90">
              Nike product
            </p>
          </button>
        </div>
        <div className=" flex-1 flex justify-between items-end w-full p-8 ">
          <div className="flex flex-col gap-y-2 md:gap-y-4">
            <h3 className=" uppercase text-2xl md:text-7xl text-white font-semibold">
              Nike Air Max
            </h3>
            <p className="text-sm md:text-2xl font-semibold text-FooterTitle">
              Nike introducing the new air max for everyone's comfort
            </p>
            <button className="bg-ShopBtn text-white text-sm font-medium py-2 px-8 rounded-lg w-fit">
              SHOP NOW
            </button>
          </div>
          <div className="flex flex-col items-center gap-y-2 md:gap-y-4">
            {
              //Image Holder to be showed in the bg
            }
            <motion.div
              drag
              dragConstraints={{
                top: -100,
                left: -500,
                bottom: 0,
                right: 0,
              }}
              className="cursor-pointer rounded-lg md:rounded-[32px] border-solid border md:border-[3px] border-FooterTitle h-[4rem] w-[4rem] md:h-[10rem] md:w-[10rem] bg-url bg-center bg-no-repeat bg-cover "
            ></motion.div>
            <motion.div
              drag
              dragConstraints={{
                top: -100,
                left: -500,
                bottom: 0,
                right: 0,
              }}
              className="cursor-pointer rounded-lg md:rounded-[32px] border-solid border md:border-[3px] border-FooterTitle h-[4rem] w-[4rem] md:h-[10rem] md:w-[10rem] bg-url bg-center bg-no-repeat bg-cover "
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
