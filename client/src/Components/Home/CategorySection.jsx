import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import lArrow from "../../assets/leftArrow.svg";
import rArrow from "../../assets/rightArrow.svg";
import { ProductCategory } from "./ProductCategory";
import { ProductCat } from "../../static/ProductCat";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ParentVaraiants } from "../../static/motionVariant";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CategorySection = () => {
  const swiperRef = useRef(null);
  return (
    <section className="w-full rounded-none bg-ViewDetails pt-4 2xl:rounded-[2rem]">
      <div className="flex items-center justify-between px-4 md:px-[80px]">
        <motion.h2
          variants={ParentVaraiants}
          initial="hidden"
          whileInView="visible"
          className="text-[24px] font-semibold text-white md:text-[74px] md:uppercase"
        >
          Categories
        </motion.h2>
        <div className="flex items-center gap-x-4">
          <div
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-FooterTitle
            opacity-80 duration-200 ease-linear hover:opacity-100`}
            onClick={() => swiperRef.current.slidePrev()}
          >
            <img src={lArrow} alt="right arrow" />
          </div>
          <div
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-FooterTitle
             opacity-80 duration-200 ease-linear hover:opacity-100
            "
            onClick={() => swiperRef.current.slideNext()}
          >
            <img src={rArrow} alt="left arrow" />
          </div>
        </div>
      </div>
      <div className="mt-6 pl-0 md:mt-0 md:pl-[80px]">
        <div className="flex h-full w-full items-center rounded-tl-[4rem] md:overflow-hidden">
          <Swiper
            slidesPerView={4}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {ProductCat.map((product) => {
              return (
                <SwiperSlide key={product?.id}>
                  <ProductCategory
                    key={product?.id}
                    productName={product?.productName}
                    productImg={product?.img}
                    redirectLink={product?.redirectLink}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
