export const blackBox = {
  initial: {
    opacity: 1,
    y: 0,
  },
  animate: {
    height: 0,
    opacity: 0,
    y: "-50%",
    transition: {
      when: "afterChildren",
      duration: 1,
      ease: "easeOut",
    },
  },
};
