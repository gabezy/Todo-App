import styled from "styled-components";

export const CustomRadioButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.blue500};
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  color: ${({ theme }) => theme.gray100};
  &.unchecked:hover {
    background: ${({ theme }) => theme.blue700};
    opacity: 0.5;
  }
  &.checked {
    background: ${({ theme }) => theme.purple700};
    border-color: ${({ theme }) => theme.purple700};

    &:hover {
      background: ${({ theme }) => theme.purple500};
    }
  }
`;
