import React from "react";
import styled from "styled-components";

interface Props {
  children: string;
}

const CallToAction = ({ children }: Props) => {
  const StyledButton = styled.button`
    background-color: #00ffff;
    padding: 5px 15px;
    border-radius: 25px;
    border: 1px solid #00ffff;
    transition: 0.15s;
    &:hover {
      background-color: transparent;
      color: #ffffff;
    }
    &:active {
        
    }
  `;

  return <StyledButton>{children}</StyledButton>;
};

export default CallToAction;
