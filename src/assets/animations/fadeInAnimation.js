export const fadeInAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.5,
      duration: 3,
      ease: "easeInOut",
      type: "spring",
      bounce: 0.4,
    },
  }),
};
