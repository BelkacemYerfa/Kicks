import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewCard } from "./ReviewCard";
import { motion } from "framer-motion";
import { ParentVaraiants } from "../../static/motionVariant";

export const Reviews = () => {
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
        <button className="translate-y-0 rounded-lg bg-ShopBtn p-3 text-sm font-medium uppercase text-white md:px-8 md:py-2 ">
          See All
        </button>
      </div>
      <br />
      <div className="flex items-center gap-x-4 ">
        <Swiper
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={16}
        >
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
