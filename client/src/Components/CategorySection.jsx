import { useState } from "react";
import lArrow from "../assets/leftArrow.svg";
import rArrow from "../assets/rightArrow.svg";
import { ProductCategory } from "./ProductCategory";
import { ProductCat } from "../static/ProductCat";

export const CategorySection = () => {
  let index = 0;
  return (
    <section className="bg-ViewDetails pt-4 w-full ">
      <div className="flex items-center justify-between px-[80px]">
        <h2 className="uppercase text-white text-[74px] font-semibold">
          Categories
        </h2>
        <div className="flex items-center gap-x-4">
          <div className="h-10 w-10 flex items-center justify-center bg-FooterTitle rounded-lg cursor-pointer ">
            <img src={lArrow} alt="right arrow" />
          </div>
          <div className="h-10 w-10 flex items-center justify-center bg-FooterTitle rounded-lg cursor-pointer">
            <img src={rArrow} alt="left arrow" />
          </div>
        </div>
      </div>
      <div className="pl-[80px] flex items-center h-full w-full">
        {ProductCat.map((product) => {
          index += 1;
          return (
            <ProductCategory
              key={product?.id}
              productName={product?.productName}
              productImg={product?.img}
              redirectLink={product?.redirectLink}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};
