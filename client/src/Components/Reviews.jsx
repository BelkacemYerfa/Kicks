import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewCard } from "./ReviewCard";

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
        <h2 className="text-[24px] md:text-[74px] text-ViewDetails font-semibold ">
          Reviews
        </h2>
        <button className="uppercase translate-y-0 bg-ShopBtn text-white text-sm font-medium p-3 md:py-2 md:px-8 rounded-lg ">
          See All
        </button>
      </div>
      <br />
      <div className="flex items-center gap-x-4 ">
        <Swiper
          slidesPerView={slides}
          spaceBetween={16}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => {
            console.log("swiper... ");
          }}
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
