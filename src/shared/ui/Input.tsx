import styled from 'styled-components';

export const StyledInput = styled.input`
  outline: none;
  border: none;
  padding: 6px 13px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textPrimary};
  border-radius: 25px;
  margin: 2px;
  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }
`;
