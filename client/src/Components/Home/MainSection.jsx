import { motion } from "framer-motion";

export const MainSection = () => {
  return (
    <section className="">
      <motion.h2
        initial={{
          y: "100%",
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className=" text-center text-[15vw] font-bold uppercase text-ViewDetails duration-300 ease-in-out "
      >
        Do It <span className="cursor-pointer text-ShopBtn">right</span>
      </motion.h2>
      <div
        className="relative flex h-[70vh] flex-col justify-center rounded-[64px] sm:h-[90vh]  "
        id="ImageBg"
      >
        <div className="relative flex h-full items-end ">
          <button className="absolute h-fit w-[40px] rounded-br-2xl rounded-tr-2xl bg-ViewDetails p-6 text-base font-semibold text-FooterTitle ">
            <p className="flex -rotate-90 items-center justify-center">
              Nike product
            </p>
          </button>
        </div>
        <div className=" flex w-full flex-1 items-end justify-between p-8 ">
          <div className="flex flex-col gap-y-2 md:gap-y-4">
            <h3 className=" text-2xl font-semibold uppercase text-white md:text-7xl">
              Nike Air Max
            </h3>
            <p className="text-sm font-semibold text-FooterTitle md:text-2xl">
              Nike introducing the new air max for everyone's comfort
            </p>
            <button className="w-fit rounded-lg bg-ShopBtn px-8 py-2 text-sm font-medium text-white">
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
              className="h-[4rem] w-[4rem] cursor-pointer rounded-lg border border-solid border-FooterTitle bg-url bg-cover bg-center bg-no-repeat md:h-[10rem] md:w-[10rem] md:rounded-[32px] md:border-[3px] "
            ></motion.div>
            <motion.div
              drag
              dragConstraints={{
                top: -100,
                left: -500,
                bottom: 0,
                right: 0,
              }}
              className="h-[4rem] w-[4rem] cursor-pointer rounded-lg border border-solid border-FooterTitle bg-url bg-cover bg-center bg-no-repeat md:h-[10rem] md:w-[10rem] md:rounded-[32px] md:border-[3px] "
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
