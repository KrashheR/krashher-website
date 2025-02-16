export const slideFromLeftAnimation = {
  hidden: {
    x: "-30%",
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: custom * 0.2,
      ease: "easeInOut",
      damping: 0.5,
    },
  }),
};
