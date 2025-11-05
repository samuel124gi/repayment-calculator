import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const EmptyResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  background: ${colors.primary02};
  border-radius: 0px 12px 12px 40px;
  padding: 40px;
`;
export const CompletedResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: ${colors.primary02};
  border-radius: 0px 12px 12px 40px;
  padding: 40px;
`;
export const EmptyHeading = styled.h1`
  color: ${colors.white};
  font-weight: bold;
  font-size: 24px;
`;

export const CompletedHeading = styled.h1`
  color: ${colors.white};
  font-weight: bold;
  font-size: 24px;
`;
export const EmptyText = styled.p`
  color: ${colors.secondary05};
  text-align: center;
  font-size: 16px;
  line-height: 150%;
`;

export const CompletedText = styled.p`
  color: ${colors.secondary05};
  font-size: 16px;
  line-height: 150%;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.black};
  padding: 32px;
  gap: 32px;
  border-top: 3px solid ${colors.secondary04};
  border-radius: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Line = styled.hr`
  width: 100%;
  height: 0.1px;
  opacity: 0.5;
  background: ${colors.secondary05};
`;

export const MonthlyRepayment = styled.h1`
  font-size: 56px;
  line-heigth: 150%;
  color: ${colors.secondary04};
  font-weight: bold;
  width: 100%;
  overflow: hidden;
`;

export const TermRepayment = styled.h1`
  font-size: 24px;
  line-heigth: 150%;
  color: ${colors.white};
  font-weight: bold;
  font-family: "Plus Jakarta Sans";
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
