import styled from "styled-components";
import { dark, mobile } from "./Variables";
import { lighten } from "polished";

export const HeaderWrapper = styled.header`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${dark.colorBase.gray700};
`;

export const Container = styled.main`
  max-width: calc(800px + 1rem);
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.3rem;
  margin-top: -2rem;
  @media (${mobile}) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: ${dark.colorBase.gray500};
  border: 1px solid ${dark.colorBase.gray700};
  border-radius: 8px;
  color: ${dark.colorBase.gray300};
  padding: 1rem;
  &:hover,
  &:focus {
    outline: none;
    border-color: ${dark.colorProduct.purpleDark};
    background: ${lighten(0.05, dark.colorBase.gray500)};
    color: ${dark.colorBase.gray100};
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  color: ${dark.colorBase.gray100};
  background: ${dark.colorProduct.blueDark};
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 700;
  transition: all 0.15s;
  cursor: pointer;
  &:hover {
    background: ${dark.colorProduct.blue};
  }
`;

export const TodoWrapper = styled.article`
  margin-top: 4rem;
  display: grid;
  gap: 1.5rem;
  display: grid;
`;

export const TodoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  & .taskTitle {
    font-size: 0.875rem;
    font-weight: bold;
    color: ${dark.colorProduct.blue};
    & .counter {
      font-size: 0.75rem;
      background: ${dark.colorBase.gray400};
      color: ${dark.colorBase.gray200};
      padding: 2px 8px;
      border-radius: 999px;
    }
  }
  & .taskTitle:last-child {
    color: ${dark.colorProduct.purple};
  }
`;

export const TodoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 1rem;
  color: ${dark.colorBase.gray300};
  border-top: 1px solid #333333;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  & .warning {
    line-height: 1.4;
  }
`;

export const TaskCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1rem;
  background: ${dark.colorBase.gray500};
  border-radius: 8px;
  gap: 12px;
  align-items: flex-start;
  color: ${dark.colorBase.gray100};
  &:last-of-type {
    margin-bottom: 3rem;
  }
`;

export const TaskContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  & .deleteButton {
    opacity: 0;
    transition: all 0.1s;
    background: transparent;
    border: none;
    padding: 4px;
    cursor: pointer;
    border-radius: 8px;
    &:hover {
      background: ${dark.colorBase.gray300};
    }
    &:hover > svg path {
      fill: red !important;
    }
    @media (${mobile}) {
      opacity: initial;
    }
  }
  &:hover .deleteButton {
    opacity: initial;
  }

  & .content {
    max-width: 70ch;
    &.checked {
      text-decoration: line-through;
      color: ${dark.colorBase.gray300};
    }
  }
`;
