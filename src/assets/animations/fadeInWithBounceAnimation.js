export const fadeInWithBounceAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.3,
      ease: "easeInOut",
      type: "spring",
      bounce: 0.3,
    },
  }),
};
