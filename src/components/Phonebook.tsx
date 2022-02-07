import { Person } from './Person';
import { PersonProps } from '../types/Person';

type PhonebookProps = {
  persons: PersonProps[];
  filter: string;
  removePerson: (person: PersonProps) => void;
};

export const Phonebook = ({
  persons,
  filter,
  removePerson,
}: PhonebookProps) => {
  const personsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase()),
      )
    : persons;

  return (
    <>
      {personsToShow.map((person) => (
        <Person key={person.id} person={person} remove={removePerson} />
      ))}
    </>
  );
};
