import styled from "styled-components";

export const CustomRadioBtn = styled.label`
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.blue500};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${({ theme }) => theme.blue700};
    opacity: 0.5;
  }
  & .checkmark {
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border-radius: 50%;

    background: ${({ theme }) => theme.purple500};
    display: none;
  }
  & input {
    display: none;
  }

  & input:checked + .checkmark {
    display: inline-block;
  }
`;
