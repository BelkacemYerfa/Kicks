import { useState } from "react";

export const FiltringMethod = () => {
  const [priceScroll, setPriceScroll] = useState(0);
  return (
    <div className="flex basis-[25%] flex-col gap-y-6 ">
      <h2 className="text-2xl/[28px] font-semibold text-ViewDetails ">
        Filters
      </h2>
      <div className="space-y-2">
        <p className="text-base/[19px] font-semibold uppercase text-ViewDetails">
          Refine By
        </p>
      </div>
      <div className="space-y-4">
        <p className=" text-base/[19px] font-semibold uppercase text-ViewDetails">
          Choes Category
        </p>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            name=""
            id="size1"
            className=" rounded-sm  border-ViewDetails bg-transparent text-ViewDetails focus:ring-0"
          />
          <label
            htmlFor="size1"
            className="text-base/[22px] font-semibold text-ViewDetails"
          >
            Nike
          </label>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-base/[19px] font-semibold uppercase text-ViewDetails">
          Gender
        </p>
        <ul className="flex flex-col gap-y-2">
          <li className="flex items-center gap-x-3">
            <input
              type="checkbox"
              name=""
              id="gender1"
              className=" rounded-sm  border-ViewDetails bg-transparent text-ViewDetails focus:ring-0"
            />
            <label
              htmlFor="gender1"
              className="text-base/[22px] font-semibold text-ViewDetails"
            >
              Man
            </label>
          </li>
          <li className="flex items-center gap-x-3">
            <input
              type="checkbox"
              name=""
              id="gender1"
              className=" rounded-sm  border-ViewDetails bg-transparent text-ViewDetails focus:ring-0"
            />
            <label
              htmlFor="gender1"
              className="text-base/[22px] font-semibold text-ViewDetails"
            >
              Man
            </label>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <p className="text-base/[19px] font-semibold uppercase text-ViewDetails">
          Price
        </p>
        <div>
          <input
            type="range"
            id="rangePrice"
            name="rangePrice"
            min="0"
            max="1000"
            className="range-sm mb-6 h-1 w-full cursor-pointer appearance-none rounded-xl bg-black "
            onChange={(e) => {
              setPriceScroll(e.target.value);
            }}
          />
          <div className="flex w-full items-center justify-between">
            <p className="">0£</p>
            <p className="">1000£</p>
          </div>
        </div>
      </div>
    </div>
  );
};
