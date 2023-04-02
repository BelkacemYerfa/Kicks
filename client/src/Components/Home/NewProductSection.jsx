import { ProductCard } from "./ProductCard";
import { motion } from "framer-motion";
import { ParentVaraiants } from "../../static/motionVariant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

export const NewProductSection = () => {
  const Text = "Don't Miss Out New Drops";

  return (
    <section className="">
      <div className="relative flex items-center justify-between md:items-end ">
        <motion.h3
          variants={ParentVaraiants}
          initial="hidden"
          whileInView="visible"
          className="w-[50%] text-[24px] font-semibold text-ViewDetails md:text-[74px] md:uppercase "
        >
          {Text}
        </motion.h3>
        <button className="translate-y-0 rounded-lg bg-ShopBtn p-3 text-sm font-medium uppercase text-white md:-translate-y-[30px] md:py-2 md:px-8">
          Shop new drops
        </button>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
      <br />
    </section>
  );
};
