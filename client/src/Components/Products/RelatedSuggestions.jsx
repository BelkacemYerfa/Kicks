import { useRef } from "react";
import lArrow from "../../assets/leftArrow.svg";
import rArrow from "../../assets/rightArrow.svg";

const RelatedSuggestions = ({}) => {
  const swiperRef = useRef(null);
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
    </section>
  );
};

export default RelatedSuggestions;
