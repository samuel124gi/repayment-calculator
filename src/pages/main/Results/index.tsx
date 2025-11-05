import {
  CompletedHeading,
  CompletedText,
  EmptyHeading,
  EmptyText,
  EmptyResultContainer,
  ResultsContainer,
  Container,
  CompletedResultContainer,
  MonthlyRepayment,
  Line,
  TermRepayment,
  TextContainer,
} from "./styles";
import EmptyImage from "../../../assets/icons/illustration-empty.svg";

interface ResultProps {
  ammount?: number;
  year?: number;
  rate?: number;
}

const Results = ({ ammount, year, rate }: ResultProps) => {
  return !ammount || !year || !rate ? (
    <EmptyResultContainer>
      <EmptyImage />
      <EmptyHeading>Results shown here</EmptyHeading>
      <EmptyText>
        Complete the form and click "Calculate Repayments" to <br />
        see what your monthly repayments would be
      </EmptyText>
    </EmptyResultContainer>
  ) : (
    <CompletedResultContainer>
      <TextContainer>
        <CompletedHeading>Results</CompletedHeading>
        <CompletedText>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again
        </CompletedText>
      </TextContainer>
      <ResultsContainer>
        <Container>
          <CompletedText>Your monthly repayments</CompletedText>
          <MonthlyRepayment>£{ammount * rate}</MonthlyRepayment>
        </Container>
        <Line />
        <Container>
          <CompletedText>Total you'll repay over the term</CompletedText>
          <TermRepayment>£{ammount * rate * year}</TermRepayment>
        </Container>
      </ResultsContainer>
    </CompletedResultContainer>
  );
};

export default Results;
