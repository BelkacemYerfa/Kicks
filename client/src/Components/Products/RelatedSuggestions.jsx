import { useEffect, useRef } from "react";
import lArrow from "../../assets/leftArrow.svg";
import rArrow from "../../assets/rightArrow.svg";
import { useSelector, useDispatch } from "react-redux";
import { fetchRelatedProducts } from "../../actions/createRelatedProducts";
import { ProductCard } from "../Home/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

const RelatedSuggestions = ({ id }) => {
  const swiperRef = useRef(null);
  const { suggestionsProducts } = useSelector(
    (state) => state.suggestionsProducts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedProducts(id));
  }, [id]);
  console.log(suggestionsProducts);
  return (
    <section className="w-full">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-5xl font-semibold uppercase text-ViewDetails">
          You may also like
        </h2>
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
      <br />
      <Swiper
        slidesPerView={4}
        spaceBetween={16}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
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
        {suggestionsProducts?.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              key={item?.id}
              id={item?.id}
              name={item?.name}
              thumbnail={item?.thumbnail}
              price={item?.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RelatedSuggestions;
