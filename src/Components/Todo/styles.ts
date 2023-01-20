import styled from "styled-components";

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
    color: ${({ theme }) => theme.blue500};
    & .counter {
      font-size: 0.75rem;
      background: ${({ theme }) => theme.gray400};
      color: ${({ theme }) => theme.gray200};
      padding: 2px 8px;
      border-radius: 999px;
    }
  }
  & .taskTitle:last-child {
    color: ${({ theme }) => theme.purple500};
  }
`;
