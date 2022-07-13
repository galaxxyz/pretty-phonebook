import { PersonProps } from '../types/Person';
import { Button } from '../shared/ui';

type PersonComponentProps = {
  person: PersonProps;
  remove: (person: PersonProps) => void;
};

export const Person = ({ person, remove }: PersonComponentProps) => {
  return (
    <p>
      {person.name} {person.number}{' '}
      <Button onClick={() => remove(person)}>delete</Button>
    </p>
  );
};
