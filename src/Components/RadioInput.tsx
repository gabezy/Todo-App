import React, { SetStateAction, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { dark } from "../styles/Variables";

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  setIsCompleted: React.Dispatch<SetStateAction<boolean>>;
  isCompleted: boolean;
  setTodoCompletedCounter: React.Dispatch<SetStateAction<number>>;
}

const CustomRadioBtn = styled.label`
  width: 20px;
  height: 20px;
  border: 1px solid ${dark.colorProduct.blue};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${dark.colorProduct.blueDark};
    opacity: 0.5;
  }
  & .checkmark {
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border-radius: 50%;

    background: ${dark.colorProduct.purple};
    display: none;
  }
  & input {
    display: none;
  }

  & input:checked + .checkmark {
    display: inline-block;
  }
`;

export const RadioInput: React.FC<RadioInputProps> = ({
  setIsCompleted,
  isCompleted,
  setTodoCompletedCounter,
  ...props
}) => {
  const handleChange = () => {
    setIsCompleted((prev) => !prev);
    if (!isCompleted) setTodoCompletedCounter((prev) => prev + 1);
    else setTodoCompletedCounter((prev) => prev - 1);
  };

  return (
    <CustomRadioBtn>
      <input
        type="radio"
        checked={isCompleted}
        onClick={handleChange}
        {...props}
      />
      <span className="checkmark"></span>
    </CustomRadioBtn>
  );
};
