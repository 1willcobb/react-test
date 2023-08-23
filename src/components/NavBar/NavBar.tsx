import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import CallToAction from "./CallToAction";
import styled from "styled-components";

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: rgb(196, 196, 196);
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <div>
        <Logo />
      </div>
      <RightNav>
        <Nav />
        <CallToAction>Join</CallToAction>
      </RightNav>
    </StyledNavBar>
  );
};

export default NavBar;
