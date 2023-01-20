import styled from "styled-components";

export const TaskCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1rem;
  background: ${({ theme }) => theme.gray500};
  border-radius: 8px;
  gap: 12px;
  align-items: flex-start;
  color: ${({ theme }) => theme.gray100};
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
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.gray300};
    &:hover {
      background: ${({ theme }) => theme.gray300};
      color: ${({ theme }) => theme.danger};
    }

    @media (${({ theme }) => theme.layouts.mobile}) {
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
      color: ${({ theme }) => theme.gray300};
    }
  }
`;
