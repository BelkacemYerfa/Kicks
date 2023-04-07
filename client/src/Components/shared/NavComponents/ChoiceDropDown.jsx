import { AnimatePresence, motion } from "framer-motion";

export const ChoiceDropDown = ({ Toggle }) => {
  const parentVaraints = {
    hidden: {
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.2,
      },
    },
    visible: {
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      height: 0,
    },
  };

  const ListVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 15,
    },
  };

  return (
    <AnimatePresence>
      {Toggle && (
        <motion.ul
          variants={parentVaraints}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="z-10 flex w-[95%] flex-col items-start gap-y-3 rounded-b-3xl bg-white p-4 shadow-lg "
        >
          <motion.p variants={ListVariants} className="NavBtns">
            New Drops 🔥
          </motion.p>
          <motion.p variants={ListVariants} className="NavBtns">
            Men
          </motion.p>
          <motion.p variants={ListVariants} className="NavBtns">
            Woman
          </motion.p>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};
