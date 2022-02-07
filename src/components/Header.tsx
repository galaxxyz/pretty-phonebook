import styled from 'styled-components';
import { ThemeSwitcher } from './ThemeSwitcher';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    margin: 1px;
  }
`;

export const Header = ({ themeSwitcher }: { themeSwitcher: () => void }) => {
  return (
    <StyledHeader>
      <h1>phone-book</h1>
      <ThemeSwitcher themeSwitcher={themeSwitcher} />
    </StyledHeader>
  );
};
