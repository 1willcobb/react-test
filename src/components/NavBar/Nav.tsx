import React from "react";
import styled from "styled-components";

const StyledNav = styled.a`
  background-color: transparent;
  transition: 0.1s;
  text-decoration: none;
  margin-right: 10px;
  color: black;

  &:hover {
    transform: translate(-2px, -2px);
    text-shadow: 7.3px 4.3px 5.3px rgba(0, 0, 0, 0.028),
      24.6px 14.3px 17.9px rgba(0, 0, 0, 0.042),
      110px 64px 80px rgba(0, 0, 0, 0.07);
    opacity: 0.5;
  }
`;

const Nav = () => {
  return (
    <>
      <StyledNav href="#">ABOUT ME</StyledNav>
      <StyledNav href="#">PORTFOLIO</StyledNav>
      <StyledNav href="#">RESUME</StyledNav>
    </>
  );
};

export default Nav;
