import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const ProductCard = ({ id, name, thumbnail, price }) => {
  return (
    <Link
      to={`/product/${id}`}
      className="flex cursor-pointer flex-col gap-y-3 p-1 "
      id={id}
    >
      <div className="first-letter rounded-[28px] bg-white p-2">
        <motion.div className="relative">
          <div
            className=" absolute left-0 top-0 flex h-[38px] w-[58px] items-center 
            justify-center rounded-tl-3xl rounded-br-3xl bg-ShopBtn text-xs font-semibold text-white "
          >
            New
          </div>
          <img
            src={`${thumbnail}`}
            className="h-[250px] w-full rounded-3xl md:h-[334px]"
            alt={name}
          />
        </motion.div>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="px-1 text-xl font-semibold text-ViewDetails">{name}</p>
        <button
          className="rounded-lg bg-ViewDetails px-2 py-4
           text-sm font-medium uppercase text-white
           duration-300 ease-in-out hover:bg-transparent hover:text-black hover:outline hover:outline-1 hover:outline-ViewDetails "
        >
          View Product - <span className="text-PannelBtn">{price}</span>
        </button>
      </div>
    </Link>
  );
};
