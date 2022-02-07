export interface PersonProps {
  id: number;
  name: string;
  number: string;
}

export type NewPersonProps = Omit<PersonProps, 'id'>;
