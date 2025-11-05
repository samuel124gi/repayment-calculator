import styled from "@emotion/styled";
import { ButtonVariant } from "../../types/component";
import colors from "../../styles/colors";

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  ${({ variant }) =>
    variant === "primary" &&
    `
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    background: ${colors.secondary04};
    height: 40px;
    border: none;
    font-weight: bold;
    border-radius: 24px;
    width: 314px;
    &:hover{
    opacity: 0.75;
    }
`}
`;
