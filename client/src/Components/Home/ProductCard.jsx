import { motion } from "framer-motion";
export const ProductCard = () => {
  return (
    <div className="flex flex-col gap-y-3 p-1">
      <div className="first-letter rounded-[28px] bg-white p-2">
        <motion.div className="relative">
          <div
            className=" absolute left-0 top-0 flex h-[38px] w-[58px] items-center 
            justify-center rounded-tl-3xl rounded-br-3xl bg-ShopBtn text-xs font-semibold text-white "
          >
            New
          </div>
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
            className="h-[250px] w-full rounded-3xl md:h-[334px]"
            alt="Product Name"
          />
        </motion.div>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="px-1 text-xl font-semibold text-ViewDetails">
          ADIDAS 4DFWD X PARLEY RUNNING SHOES
        </p>
        <button
          className="rounded-lg bg-ViewDetails px-2 py-4
           text-sm font-medium uppercase text-white
           duration-300 ease-in-out hover:bg-transparent hover:text-black hover:outline hover:outline-1 hover:outline-ViewDetails "
        >
          View Product - <span className="text-PannelBtn">$125</span>
        </button>
      </div>
    </div>
  );
};
