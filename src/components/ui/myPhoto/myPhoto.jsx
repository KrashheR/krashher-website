import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { StyledBorder, StyledMyPhotoImage, StyledMyPhotoContainer, StyledMyPhotoPicture } from "./styled";

function MyPhoto({ imageSrc, imageSrcMobile }) {
  const [scope, animate] = useAnimate();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 1, delayChildren: 2 },
    },
  };

  function RotateAnimation() {
    animate(
      scope.current,
      {
        rotate: 360,
      },
      {
        repeat: Infinity,
        opacity: [1, 0.5, 1],
        ease: "linear",
        duration: 8,
      }
    );
  }

  useEffect(() => {
    RotateAnimation();
  });

  return (
    <StyledMyPhotoContainer
      as={motion.div}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <StyledBorder as={motion.div} ref={scope}></StyledBorder>
      <StyledMyPhotoPicture>
        <source srcSet={imageSrcMobile} media="(max-width: 575px)"></source>
      <StyledMyPhotoImage src={imageSrc} alt="Моя фотография" loading="lazy" />
      </StyledMyPhotoPicture>

    </StyledMyPhotoContainer>
  );
}

export default MyPhoto;
