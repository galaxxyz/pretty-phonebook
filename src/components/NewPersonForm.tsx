import { FormEvent } from 'react';
import { Button, Input } from '../shared/ui';

interface FormProps {
  addPerson: (event: FormEvent) => void;
  newName: string;
  newNumber: string;
  setNewName: (value: React.SetStateAction<string>) => void;
  setNewNumber: (value: React.SetStateAction<string>) => void;
}

export const NewPersonForm = ({
  addPerson,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
}: FormProps) => (
  <form onSubmit={addPerson}>
    <div>
      name:{' '}
      <Input
        value={newName}
        onChange={(event) => {
          setNewName(event.target.value);
        }}
        placeholder="Tony Stark"
      />
    </div>
    <div>
      number:{' '}
      <Input
        value={newNumber}
        onChange={(event) => {
          setNewNumber(event.target.value);
        }}
        placeholder="23232323"
      />
    </div>
    <Button type="submit">add</Button>
  </form>
);
