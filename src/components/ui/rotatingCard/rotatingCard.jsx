import React from "react";
import {
  StyledRotatingCardContainer,
  StyledRotatingCardInner,
  StyledRotatingCardFront,
  StyledRotatingCardBack,
  StyledRotatingCardTitle,
  StyledRotatingCardImage,
} from "./styled";
import List, { listType } from "../list/list";
import useIsDesktop from "../../hooks/useIsDesktop";

const RotatingCard = ({ title, items, image }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const isDesktop = useIsDesktop(768);

  const handleMouseEnter = () => {
    if (isDesktop) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setIsFlipped(false);
    }
  };

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <StyledRotatingCardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <StyledRotatingCardInner
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <StyledRotatingCardFront>
          <StyledRotatingCardTitle>{title}</StyledRotatingCardTitle>
          <StyledRotatingCardImage src={image} alt="" />
        </StyledRotatingCardFront>
        <StyledRotatingCardBack>
          <List type={listType.UNORDERED} items={items} />
        </StyledRotatingCardBack>
      </StyledRotatingCardInner>
    </StyledRotatingCardContainer>
  );
};

export default RotatingCard;
