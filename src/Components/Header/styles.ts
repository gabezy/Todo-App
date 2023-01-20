import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.gray700};
`;
