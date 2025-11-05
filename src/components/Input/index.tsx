import { InputVariant } from "../../types/component";
import { StyledInput } from "./styles";

interface InputProps {
  type: InputVariant;
  placeholder?: string;
  name?: string;
  value?: any;
  onChange?: any;
}

const Input = ({ type, placeholder, ...rest }: InputProps) => {
  return (
    <StyledInput type={type} placeholder={placeholder} {...rest}></StyledInput>
  );
};

export default Input;
