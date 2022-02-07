import styled, { useTheme } from 'styled-components';
import { Sun, Moon } from '../shared/icons';

export const ThemeSwitcher = ({
  themeSwitcher,
}: {
  themeSwitcher: () => void;
}) => {
  const Icon = useTheme().name === 'light' ? Sun : Moon;
  return (
    <StyledButton onClick={themeSwitcher}>
      <Icon />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  outline: none;
  border: none;
  padding: 10px;
  height: 45px;
  width: 45px;
  background-color: ${({ theme }) => theme.accent};
  color: white;
  border-radius: 25px;

  svg path {
    color: white;
    fill: currentcolor;
  }
  &:hover svg {
    filter: drop-shadow(0 0 2px white);
  }
`;
