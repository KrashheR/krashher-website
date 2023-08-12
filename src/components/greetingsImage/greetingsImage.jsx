import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { StyledBorder, StyledGreetingsImage, StyledGreetingsImageContainer } from "./styled";

function GreetingsImage ({ imageSrc }) {
  const [scope, animate] = useAnimate();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 1, delayChildren: 2 }
    }
  };

  function RotateAnimation() {
    animate(
      scope.current,
      {
        rotate: 360
      },
      {
        repeat: Infinity,
        opacity: [1, 0.5, 1],
        ease: "linear",
        duration: 8
      }
    );
  }

  useEffect(() => {
    RotateAnimation();
  }, []);

  return (
    <StyledGreetingsImageContainer as={motion.div} variants={container} initial="hidden" animate="visible">
      <StyledBorder as={motion.div} ref={scope}></StyledBorder>
      <StyledGreetingsImage src={imageSrc} />
    </StyledGreetingsImageContainer>
  )
}

export default GreetingsImage;