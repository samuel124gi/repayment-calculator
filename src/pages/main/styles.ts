import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const MainContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  background: ${colors.primary01};
  height: 100vh;
`;
export const InnerContainer = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  background: ${colors.white};
  border-radius: 24px;
  overflow: hidden;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
  justify-content: space-between;
`;
export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 125%;
  color: ${colors.primary02};
`;

export const RadioText = styled.h1`
  font-size: 18px;
  font-weight: bold;
  line-height: 125%;
  color: ${colors.primary02};
`;
export const Clear = styled.p`
  font-size: 16px;
  text-decoration: underline;
  line-height: 150%;
  cursor: pointer;
  color: ${colors.primary02};
`;
export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 16px;
  color: ${colors.secondary01};
  font-weight: 600;
  line-height: 150%;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 48px;
  border-radius: 4px;
  border: 1.5px solid ${colors.secondary02};
  overflow: hidden;
`;
export const RadioContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 48px;
  gap: 20px;
  border-radius: 4px;
  border: 1.5px solid ${colors.secondary02};
  overflow: hidden;
`;

export const InputSide = styled.div`
  height: 100%;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  font-size: 18px;
  background: ${colors.primary01};
  color: ${colors.secondary01};
  font-weight: bold;
  line-height: 125%;
`;
export const TwoInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ErrorContainer = styled.label`
  display: flex;
  flex-direction: column;
  // gap: 12px;
  font-size: 16px;
  color: ${colors.secondary04};
  font-weight: 600;
  line-height: 150%;
`;
export const Error = styled.small`
  color: red;
`;
