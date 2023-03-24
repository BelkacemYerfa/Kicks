import { ProductCard } from "./ProductCard";
import { motion } from "framer-motion";

export const NewProductSection = () => {
  const Text = "Don't Miss Out New Drops";
  const words = Text.split(" ");
  const ParentVaraiants = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 4,
        when: "beforeChildren",
      },
    },
  };
  const ChildVariants = {
    hidden: {
      y: 200,
    },
    visible: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <section className="">
      <div className="relative flex items-center md:items-end justify-between ">
        <motion.h3
          variants={ParentVaraiants}
          animate="visible"
          initial="hidden"
          className="md:uppercase text-[24px] md:text-[74px] w-[50%] text-ViewDetails font-semibold "
        >
          {words.map((value, index) => (
            <motion.span key={index} variants={ChildVariants}>
              {value + " "}
            </motion.span>
          ))}
        </motion.h3>
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
