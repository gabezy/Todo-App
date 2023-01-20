import styled from "styled-components";
import { lighten } from "polished";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.3rem;
  margin-top: -2rem;
  @media (${({ theme }) => theme.layouts.mobile}) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.gray500};
  border: 1px solid ${({ theme }) => theme.gray700};
  border-radius: 8px;
  color: ${({ theme }) => theme.gray100};
  padding: 1rem;
  &:hover,
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.purple700};
    background: ${lighten(0.05, "#262626")};
    color: ${({ theme }) => theme.gray100};
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.gray100};
  background: ${({ theme }) => theme.blue700};
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 700;
  transition: all 0.15s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.blue500};
  }
`;
