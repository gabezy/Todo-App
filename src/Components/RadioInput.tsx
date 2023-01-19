import React from "react";
import styled from "styled-components";
import { dark } from "../styles/Variables";

const CustomRadioBtn = styled.label`
  width: 20px;
  height: 20px;
  border: 1px solid ${dark.colorProduct.blue};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const RadioInput = ({ checked = false }) => {
  return (
    <CustomRadioBtn>
      <input type="radio" name="completed" checked={checked} />
      <span className="checkmark"></span>
    </CustomRadioBtn>
  );
};
