import styled from 'styled-components';
import { Input } from '../shared/ui';

type FilterProps = {
  filter: string;
  setFilter: (value: React.SetStateAction<string>) => void;
};

const StyledFilter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  label {
    width: 160px;
  }
  input {
    width: 100%;
    flex-grow: 1;
  }
`;

export const Filter = ({ filter, setFilter }: FilterProps) => (
  <StyledFilter>
    <label>find by name </label>
    <Input
      value={filter}
      onChange={(event) => {
        setFilter(event.target.value);
      }}
    />
  </StyledFilter>
);
