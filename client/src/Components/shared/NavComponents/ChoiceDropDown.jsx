import { AnimatePresence, motion } from "framer-motion";

export const ChoiceDropDown = ({ Toggle }) => {
  const parentVaraints = {
    hidden: {
      height: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    exit: {
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {Toggle && (
        <motion.ul
          variants={parentVaraints}
          initial="hidden"
          animate="visible"
          exit={{
            height: 0,
          }}
          transition={{
            duration: 0.5,

            ease: "easeInOut",
          }}
          className="z-10 flex w-[95%] flex-col items-start gap-y-3 rounded-b-3xl bg-white p-4 shadow-lg "
        >
          <motion.p className="NavBtns">New Drops 🔥</motion.p>
          <motion.p className="NavBtns">Men</motion.p>
          <motion.p className="NavBtns">Woman</motion.p>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};
