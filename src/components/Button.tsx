import { useEffect, useState } from "react";

interface Props {
  children: string,
  onClick: () => void,
}

const Button = ({ onClick, children }: Props) => {

  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};

export default Button;
