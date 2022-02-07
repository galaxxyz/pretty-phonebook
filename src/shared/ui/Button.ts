import styled from 'styled-components';

export const StyledButton = styled.button`
  outline: none;
  border: none;
  padding: 6px 13px;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.textButton};
  border-radius: 25px;

  &:hover {
    background-color: ${({ theme }) => theme.accentHover};
  }
`;
