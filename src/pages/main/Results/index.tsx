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
  type?: "repayment" | "interest-only";
}

const Results = ({ ammount, year, rate, type }: ResultProps) => {
  if (!ammount || !year || !rate) {
    return (
      <EmptyResultContainer>
        <EmptyImage />
        <EmptyHeading>Results shown here</EmptyHeading>
        <EmptyText>
          Complete the form and click "Calculate Repayments" to <br />
          see what your monthly repayments would be
        </EmptyText>
      </EmptyResultContainer>
    );
  }

  const monthlyRate = rate / 100 / 12;
  const totalMonths = year * 12;

  let monthlyPayment = 0;
  let totalRepayment = 0;

  if (type === "interest-only") {
    monthlyPayment = ammount * monthlyRate;
    totalRepayment = monthlyPayment * totalMonths;
  } else {
    monthlyPayment =
      (ammount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    totalRepayment = monthlyPayment * totalMonths;
  }

  return (
    <CompletedResultContainer>
      <TextContainer>
        <CompletedHeading>Results</CompletedHeading>
        <CompletedText>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </CompletedText>
      </TextContainer>

      <ResultsContainer>
        <Container>
          <CompletedText>Your monthly repayments</CompletedText>
          <MonthlyRepayment>£{monthlyPayment}</MonthlyRepayment>
        </Container>

        <Line />

        <Container>
          <CompletedText>Total you'll repay over the term</CompletedText>
          <TermRepayment>£{totalRepayment}</TermRepayment>
        </Container>
      </ResultsContainer>
    </CompletedResultContainer>
  );
};

export default Results;
