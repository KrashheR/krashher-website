export const showingText = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.025,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};
