import { Check } from "phosphor-react";
import React, { InputHTMLAttributes } from "react";
import { CustomRadioButton } from "./styles";

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  toggleCompletedTask: () => void;
  isCompleted: boolean;
}

export const RadioInput: React.FC<RadioInputProps> = ({
  toggleCompletedTask,
  isCompleted,
  ...props
}) => {
  return (
    <>
      {isCompleted ? (
        <CustomRadioButton className="checked" onClick={toggleCompletedTask}>
          <Check size={12} />
        </CustomRadioButton>
      ) : (
        <CustomRadioButton
          className="unchecked"
          onClick={toggleCompletedTask}
        ></CustomRadioButton>
      )}
    </>
    // <CustomRadioButton onClick={handleChange}>
    //   {isCompleted ? <Check size={12} /> : ""}
    // </CustomRadioButton>
  );
};
