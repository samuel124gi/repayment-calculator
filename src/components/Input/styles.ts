import styled from "@emotion/styled";
import { InputVariant } from "../../types/component";
import colors from "../../styles/colors";

export const StyledInput = styled.input<{ type: InputVariant }>`
  ${({ type }) =>
    type === "number" &&
    `
    width: 100%;
    border: none;
    padding: 12px;
    outline: none;
    appearance:none;
`}
  ${({ type }) =>
    type === "text" &&
    `
    width: 100%;
    border: none;
    padding: 12px;
    outline: none;
    appearance:none;
`}
  ${({ type }) =>
    type === "radio" &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
    appearance:none;
    height: 24px;
    width: 24px;
    margin-left: 20px;
    border: 1.5px solid ${colors.secondary01};

    border-radius: 50%;
    &:checked{  
    background: ${colors.white};
    border: 1.5px solid ${colors.secondary04};
    }
    &:checked::after {
    content: ".";
    width: 15px;
    height: 15px;
    color: ${colors.secondary04};
    background: yellow;
    border-radius: 50%;
    text-align: center;
}
`}
`;
