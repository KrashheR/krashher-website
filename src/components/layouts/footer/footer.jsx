import React, { Suspense, lazy } from "react";
import Container from "../../containers/container/container";
import { StyledFooter } from "./styled";
import { useInView } from "react-intersection-observer";
const Contacts= lazy(() => import("../../sections/contacts/contacts"));

function Footer() {
  const { ref, inView } = useInView({triggerOnce: true});

  return(
    <StyledFooter ref={ref}>
      <Container>
        <Suspense fallback={<div />}>{inView && <Contacts/>}</Suspense>
      </Container>
    </StyledFooter>
  );
}

export default Footer;