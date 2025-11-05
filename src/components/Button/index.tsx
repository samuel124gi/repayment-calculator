import React from "react";
import { ButtonVariant } from "../../types/component";
import { StyledButton } from "./styles";
interface buttonProps {
  variant: ButtonVariant;
  label?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
const Button = ({ variant, label, onClick, children }: buttonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {label || children}
    </StyledButton>
  );
};

export default Button;
