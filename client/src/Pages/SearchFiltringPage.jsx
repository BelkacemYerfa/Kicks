import { useState } from "react";
import { Offers } from "../Components/Search/Offers";
import { FiltringMethod } from "../Components/Search/filtring/FiltringMethods";
import { ProductResults } from "../Components/Search/filtring/ProductsResults";
import { motion } from "framer-motion";
import { boolean } from "yup";

export const SearchFiltring = () => {
  const itemsNumber = 122;
  const [HoverTrendingBtnIcon, SetHoverTrendingBtnIcon] = useState(false);
  return (
    <section className="w-[95%]">
      <Offers />
      <br />
      <section className="w-full space-y-6 ">
        <div className="flex w-full items-center justify-between">
          <div>
            <h3 className="text-4xl/[43px] font-semibold text-ViewDetails">
              Life Style Shoes
            </h3>
            <p className="text-base/[22px] font-semibold text-ViewDetails">
              {itemsNumber} items
            </p>
          </div>
          <div className="flex items-end gap-y-2">
            <div
              className="flex w-[180px] cursor-default items-center justify-between rounded-2xl bg-TrendingBtn p-4"
              onMouseEnter={() => {
                SetHoverTrendingBtnIcon(true);
              }}
              onMouseLeave={() => {
                SetHoverTrendingBtnIcon(false);
              }}
            >
              <p className="text-base/[19px] font-semibold uppercase text-ViewDetails ">
                Trending
              </p>
              <motion.svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: HoverTrendingBtnIcon ? 1 : 0 }}
                  transition={{
                    duration: 0.35,
                  }}
                  d="M5.25 9.5L12 16.25L18.75 9.5"
                  stroke="#232321"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-x-[1.17rem]">
          <FiltringMethod />
          <ProductResults />
        </div>
      </section>
    </section>
  );
};
