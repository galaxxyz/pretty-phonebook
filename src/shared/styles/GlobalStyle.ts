import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   body {
     margin: 0;
     font-family: "Monaco", monospace;
     background: ${({ theme }) => theme.secondary};
     color: ${({ theme }) => theme.textPrimary};
     transition: all 0.30s linear; 
  }

  input, input::placeholder, button {
    font-family: "Monaco", monospace;
  }
`;
