import { motion } from "framer-motion";

export const FramerTest = () => {
  /* const parentVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };
  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      staggerChildren: 0.2,
    },
  }; */
  return (
    <div>
      <motion.div
        /* variants={parentVariants} */
        /* drag
        dragConstraints={{
          right: 30,
          left: 30,
          bottom: 30,
          top: 30,
        }} */
        /* initial="hidden"
        animate="visible" */
        /* animate={{
          scale: [1, 1.1, 0.9, 1],
          borderRadius: [10, 100, 50, 10],
        }}
        transition={{
          duration: 3,
        }} */
        /*  transition={{
          type: "spring",
          stiffness: 200,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }} */
        className="flex items-center justify-center flex-col gap-y-2 h-[200px] w-[200px] bg-black rounded shadow-sm"
      >
        {/* {[0, 1, 2].map((value) => (
          <motion.div
            variants={childVariants}
            key={value}
            className="h-10 w-10 bg-white rounded-lg"
          ></motion.div>
        ))} */}
      </motion.div>
    </div>
  );
};
