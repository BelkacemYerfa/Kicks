import { ProductCard } from "./ProductCard";

export const NewProductSection = () => {
  return (
    <section className="">
      <div className="relative flex items-center md:items-end justify-between ">
        <h3 className="md:uppercase text-[24px] md:text-[74px] w-[50%] text-ViewDetails font-semibold ">
          Don't Miss Out New Drops
        </h3>
        <button className="uppercase translate-y-0 md:-translate-y-[30px] bg-ShopBtn text-white text-sm font-medium p-3 md:py-2 md:px-8 rounded-lg">
          Shop new drops
        </button>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-4 md:gap-y-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};