import styled from "styled-components";

export const TodoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 1rem;
  color: ${({ theme }) => theme.gray300};
  border-top: 1px solid #333333;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const TaskEmptyWarning = styled.div`
  line-height: 1.4;
`;
