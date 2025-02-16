export const popUpFromDownAnimation = {
  hidden: {
    y: 30,
    opacity: 0,
    scale: 1.5,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.2, duration: 0.45 },
  }),
};
