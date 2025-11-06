import { InnerContainer, MainContainer } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  Clear,
  MainForm,
  FormContainer,
  Heading,
  InputContainer,
  InputSide,
  Label,
  RadioContainer,
  RadioText,
  TopContainer,
  TwoInputContainer,
  Error,
  ErrorContainer,
} from "./styles";

import Calculator from "../../assets/icons/icon-calculator.svg";
import { useForm } from "react-hook-form";
import Results from "./Results";
import { useState } from "react";

interface FormValues {
  ammount: number;
  year: number;
  rate: number;
  radio: string;
}

const Main = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    mode: "all",
  });

  const [values, setValues] = useState<FormValues | null>(null);
  const onSubmit = (data: FormValues) => {
    setValues(data);
  };
  const handleClear = () => {
    setValues(null);
    reset();
  };
  return (
    <MainContainer>
      <InnerContainer>
        <FormContainer>
          <TopContainer>
            <Heading>Mortgage Calculator</Heading>
            <Clear onClick={handleClear}>Clear All</Clear>
          </TopContainer>
          <MainForm onSubmit={handleSubmit(onSubmit)}>
            <Label>
              Mortgage Amount
              <ErrorContainer>
                <InputContainer error={!!errors.ammount}>
                  <InputSide error={!!errors.ammount}>£</InputSide>
                  <Input
                    type="number"
                    {...register("ammount", {
                      required: "This field is required",
                    })}
                  />
                </InputContainer>
                <Error>{errors.ammount?.message}</Error>
              </ErrorContainer>
            </Label>
            <TwoInputContainer>
              <Label>
                Mortgage Term
                <ErrorContainer>
                  <InputContainer error={!!errors.year}>
                    <Input
                      type="number"
                      {...register("year", {
                        required: "This field is required",
                      })}
                    />
                    <InputSide error={!!errors.year}>Years</InputSide>
                  </InputContainer>
                  <Error>{errors.year?.message}</Error>
                </ErrorContainer>
              </Label>
              <Label>
                Interest Rate
                <ErrorContainer>
                  <InputContainer error={!!errors.rate}>
                    <Input
                      type="text"
                      {...register("rate", {
                        required: "This field is required",
                      })}
                    />
                    <InputSide error={!!errors.rate}>%</InputSide>
                  </InputContainer>
                  <Error>{errors.rate?.message}</Error>
                </ErrorContainer>
              </Label>
            </TwoInputContainer>
            <Label>
              Mortgage Type
              <RadioContainer>
                <Input
                  type="radio"
                  value="repayment"
                  {...register("radio", { required: true })}
                />
                <RadioText>Repayment</RadioText>
              </RadioContainer>
              <RadioContainer>
                <Input
                  type="radio"
                  value="interest-only"
                  {...register("radio", { required: true })}
                  // rate={rate} type="interest-only"
                />
                <RadioText>Interest Only</RadioText>
              </RadioContainer>
              {errors.radio && <Error>Please select a type</Error>}
            </Label>
            <Button variant="primary" onClick={() => onSubmit}>
              <Calculator />
              Calculate Repayments
            </Button>
          </MainForm>
        </FormContainer>
        <Results
          ammount={values?.ammount}
          year={values?.year}
          rate={values?.rate}
          type={values?.radio as "repayment" | "interest-only"}
        />
      </InnerContainer>
    </MainContainer>
  );
};

export default Main;
