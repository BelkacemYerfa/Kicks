import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewCard } from "./ReviewCard";
import { motion } from "framer-motion";
import { ParentVaraiants } from "../../static/motionVariant";

export const Reviews = () => {
  const [slides, setSlides] = useState(0);
  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 720
        ? 2
        : window.innerWidth > 720
        ? 3
        : 0
    );
  };
  useEffect(() => {
    setSlidesPerview();
    window.addEventListener("resize", setSlidesPerview);
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);
  return (
    <section className="">
      <div className="flex items-center justify-between">
        <motion.h2
          variants={ParentVaraiants}
          initial="hidden"
          whileInView="visible"
          className="text-[24px] font-semibold uppercase text-ViewDetails md:text-[74px] "
        >
          Reviews
        </motion.h2>
        <button className="translate-y-0 rounded-lg bg-ShopBtn p-3 text-sm font-medium uppercase text-white md:py-2 md:px-8 ">
          See All
        </button>
      </div>
      <br />
      <div className="flex items-center gap-x-4 ">
        <Swiper slidesPerView={slides} spaceBetween={16}>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
