import React from "react";
import { StyledLink } from "./styled";

export const LinkType = {
  GITHUB: "github",
  DEMO: "demo",
  TELEGRAM: "telegram",
};

function Link({ children, linkType, href, target }) {
  return (
    <StyledLink $linkType={linkType} href={href} target={target}>
      {children}
    </StyledLink>
  );
}

export default Link;
