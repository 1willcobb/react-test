import React from "react";
import styled from "styled-components"

const Logo = () => {
  const StyledLogo = styled.h1`
    font-weight: 900;
    white-space: nowrap;
  `

  return <StyledLogo>TEST APP</StyledLogo>;
};

export default Logo;
