import React, { SetStateAction, InputHTMLAttributes } from "react";
import { CustomRadioBtn } from "./styles";

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  setIsCompleted: React.Dispatch<SetStateAction<boolean>>;
  isCompleted: boolean;
  setTodoCompletedCounter: React.Dispatch<SetStateAction<number>>;
}

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
