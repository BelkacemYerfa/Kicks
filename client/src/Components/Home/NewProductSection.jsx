import { ProductCard } from "./ProductCard";
import { motion } from "framer-motion";
import { ParentVaraiants } from "../../static/motionVariant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNewProduct } from "../../actions/createNewProduct";

export const NewProductSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewProduct());
  }, []);
  const { products } = useSelector((state) => state.products);
  console.log(products);
  return (
    <section className="">
      <div className="relative flex items-center justify-between md:items-end ">
        <motion.h3
          variants={ParentVaraiants}
          initial="hidden"
          whileInView="visible"
          className="w-[50%] text-[24px] font-semibold text-ViewDetails md:text-[74px] md:uppercase "
        >
          Don't Miss Out New Drops
        </motion.h3>
        <button className="translate-y-0 rounded-lg bg-ShopBtn p-3 text-sm font-medium uppercase text-white md:-translate-y-[30px] md:px-8 md:py-2">
          Shop new drops
        </button>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
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
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products?.data?.map((product) => (
          <SwiperSlide key={product?.id}>
            <ProductCard
              key={product?.id}
              id={product?.id}
              thumbnail={product?.thumbnail}
              name={product?.name}
              price={product?.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
    </section>
  );
};
