// CardStyles.js
import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledRotatingCardContainer = styled.div`
  width: 50%;
  height: 380px;
  perspective: 1000px;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    height: 460px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 100%;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    height: 400px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    height: 400px;
  }
`;

export const StyledRotatingCardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`;

export const StyledRotatingCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 16px;
`;

export const StyledRotatingCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 16px;
  padding: 8px;
`;

export const StyledRotatingCardTitle = styled.h3`
  font-size: 36px;
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 26px;
  }
`;

export const StyledRotatingCardImage = styled.img`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 64px;
  height: 64px;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    top: 14px;
    right: 14px;
    width: 48px;
    height: 48px;
  }
`;
