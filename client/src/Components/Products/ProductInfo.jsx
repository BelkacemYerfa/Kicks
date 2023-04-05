import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductInfo = ({
  id,
  name,
  thumbnail,
  price,
  description,
  category,
  brand,
  features,
  images,
  url,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [SelectedImage, setImage] = useState(null);
  const indexCheck = (index) => {
    if (index === 0)
      return "rounded-tl-[48px] md:rouneded-b-0 md:rouneded-tr-0";
    if (index === 1)
      return "rounded-tr-[48px] md:rouneded-b-0 md:rouneded-tl-0";
    if (index === 2)
      return "rounded-bl-[48px] md:rouneded-t-0 md:rouneded-br-0";
    if (index === 3)
      return "rounded-br-[48px] md:rouneded-t-0 md:rouneded-bl-0";
  };
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <section className="flex flex-col gap-x-4 gap-y-6 md:flex-row">
      <div className="flex w-full flex-wrap gap-4 md:w-[60%]">
        {windowWidth > 768 ? (
          images?.map(
            (image, index) =>
              index < 4 && (
                <img
                  key={index}
                  src={`${image}`}
                  className={`h-[350px] w-[48%] rounded-2xl md:${indexCheck(
                    index
                  )} `}
                  alt={name}
                />
              )
          )
        ) : (
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              pagination
              modules={[Pagination]}
              onSlideChange={(swiper) => {
                if (SelectedImage) swiper.slideTo(SelectedImage);
              }}
            >
              {images?.map(
                (image, index) =>
                  index < 4 && (
                    <SwiperSlide key={index}>
                      <img
                        key={index}
                        src={`${image}`}
                        className={`h-[350px] w-full rounded-2xl md:${indexCheck(
                          index
                        )} `}
                        alt={name}
                      />
                    </SwiperSlide>
                  )
              )}
            </Swiper>
            <div className="flex w-full gap-x-2">
              {images?.map(
                (image, index) =>
                  index < 4 && (
                    <img
                      key={index}
                      src={`${image}`}
                      className=" h-16 w-16 rounded-lg"
                      alt={name}
                      onClick={() => setImage(index)}
                    />
                  )
              )}
            </div>
          </>
        )}
      </div>
      <div className=" w-full space-y-4 md:w-[40%]">
        <div
          className="flex w-fit items-center justify-center  rounded-xl 
            bg-ShopBtn px-4 py-3 text-xs font-semibold text-white "
        >
          New Release
        </div>
        <p className="text-[32px] font-semibold text-ViewDetails">{name}</p>
        <p className="text-2xl font-semibold text-ShopBtn">{price}</p>
        <div className="w-full space-y-2">
          <div className="flex w-full gap-x-2">
            <button className="h-12 w-full rounded-lg bg-ViewDetails p-2 uppercase text-white duration-300 ease-in-out hover:bg-transparent hover:text-black hover:outline hover:outline-1 hover:outline-ViewDetails  ">
              add to cart
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-lg bg-ViewDetails p-4 duration-300 ease-in-out hover:bg-transparent hover:outline hover:outline-1 hover:outline-ViewDetails ">
              <motion.svg
                ini
                animate={{ fill: "red" }}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  animate={{ pathLength: 1 }}
                  d="M11.0291 2.5C9.00032 2.5 8.00032 4.5 8.00032 4.5C8.00032 4.5 7.00032 2.5 4.97157 2.5C3.32282 2.5 2.01719 3.87937 2.00032 5.52531C1.96594 8.94187 4.71063 11.3716 7.71907 13.4134C7.80201 13.4699 7.9 13.5 8.00032 13.5C8.10063 13.5 8.19863 13.4699 8.28157 13.4134C11.2897 11.3716 14.0344 8.94187 14.0003 5.52531C13.9834 3.87937 12.6778 2.5 11.0291 2.5V2.5Z"
                  stroke="red"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </motion.svg>
            </button>
          </div>
          <button className="w-full rounded-lg bg-ShopBtn p-2 uppercase text-white duration-300 ease-in-out hover:bg-transparent hover:text-black hover:outline hover:outline-1 hover:outline-ShopBtn">
            buy it now
          </button>
        </div>
        <p className="text-base font-semibold uppercase text-ViewDetails ">
          About the product
        </p>
        <div className="">
          <p className="text-base font-normal text-ViewDetails opacity-80">
            {brand}
          </p>
          <br />
          <p className="text-base font-normal text-ViewDetails opacity-80">
            {description?.split(":").map((item, index) =>
              index !== description.split(":").length - 1 ? (
                index % 2 === 0 ? (
                  <span key={index}>
                    {item}:
                    <br />
                  </span>
                ) : (
                  <span key={index}>
                    {item}.<br />
                  </span>
                )
              ) : (
                <span key={index}>{item}.</span>
              )
            )}
          </p>
          <br />
          <p className="text-normal text-base text-ViewDetails opacity-80">
            For more details ,{" "}
            <span>
              <Link to={url} className="font-semibold !text-blue-500 underline">
                Click Here
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
