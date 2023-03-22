import { Swiper, SwiperSlide } from "swiper/react";
import lArrow from "../assets/leftArrow.svg";
import rArrow from "../assets/rightArrow.svg";
import { ProductCategory } from "./ProductCategory";
import { ProductCat } from "../static/ProductCat";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CategorySection = () => {
  const swiperRef = useRef(null);
  return (
    <section className="bg-ViewDetails pt-4 w-full ">
      <div className="flex items-center justify-between px-4 md:px-[80px]">
        <h2 className="md:uppercase text-white text-[24px] md:text-[74px] font-semibold">
          Categories
        </h2>
        <div className="flex items-center gap-x-4">
          <div
            className={`h-10 w-10 flex items-center justify-center bg-FooterTitle rounded-lg cursor-pointer`}
            onClick={() => {
              swiperRef.current.slidePrev();
            }}
          >
            <img src={lArrow} alt="right arrow" />
          </div>
          <div
            className="h-10 w-10 flex items-center justify-center bg-FooterTitle rounded-lg cursor-pointer"
            onClick={() => {
              swiperRef.current.slideNext();
            }}
          >
            <img src={rArrow} alt="left arrow" />
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-0 pl-4 md:pl-[80px]">
        <div className="flex flex-col md:flex-row items-center h-full w-full rounded-tl-[4rem] overflow-hidden">
          <Swiper
            // install Swiper modules
            slidesPerView={2}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={() => {
              console.log("swiper... ");
            }}
          >
            {ProductCat.map((product) => {
              return (
                <SwiperSlide>
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
