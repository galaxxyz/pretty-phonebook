import { useState, useEffect, FormEvent } from 'react';
import personService from './services/persons';
import { PersonProps } from './types/Person';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './shared/styles';
import useTheme from './hooks/useTheme';
import {
  Notification,
  Phonebook,
  Filter,
  NewPersonForm,
  Header,
} from './components';

const App = () => {
  const [persons, setPersons] = useState<PersonProps[]>([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [successMessage, setSuccessMessage] = useState<null | string>(null);

  const [theme, themeSwitcher] = useTheme();
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    personService.getAll().then((response) => setPersons(response));
  }, []);

  const handleSuccessPhonebookEditing = (message: string) => {
    setNewName('');
    setNewNumber('');
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), 5000);
  };

  const addPerson = (event: FormEvent) => {
    event.preventDefault();
    const personWithSameName = persons.find(
      (person) => person.name === newName,
    );
    const personWithSameNumber = persons.find(
      (person) => person.number === newNumber,
    );

    if (personWithSameName) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        personService
          .update(personWithSameName.id, {
            ...personWithSameName,
            number: newNumber,
          })
          .then((response) => {
            setPersons(
              persons.map((p) => {
                return p.id !== personWithSameName.id ? p : response;
              }),
            );
            handleSuccessPhonebookEditing(`${newName}'s number was changed`);
          })
          .catch((error) => {
            if (error.response.data.type === 'ValidationError') {
              personService.getAll().then((response) => setPersons(response));
              setErrorMessage(error.response.data.error);
              setTimeout(() => setErrorMessage(null), 5000);
            } else {
              personService.getAll().then((response) => setPersons(response));
              setErrorMessage(`${newName} was already deleted from server`);
              setTimeout(() => setErrorMessage(null), 5000);
            }
          });
      }
    } else if (personWithSameNumber) {
      window.alert(
        `${newNumber} is already added to phonebook as ${personWithSameNumber.name}`,
      );
    } else {
      personService
        .create({ name: newName, number: newNumber })
        .then((response) => {
          setPersons(persons.concat(response));
          handleSuccessPhonebookEditing(`Added ${newName}`);
        })
        .catch((error) => {
          setErrorMessage(error.response.data.error);
          setTimeout(() => setErrorMessage(null), 5000);
        });
    }
  };

  const removePerson = (person: PersonProps) => {
    if (window.confirm(`Delete ${person.name}?`))
      personService
        .remove(person.id)
        .then((response) => {
          setPersons(persons.filter((p) => p.id !== response));
        })
        .catch(() => {
          personService.getAll().then((response) => setPersons(response));
          setErrorMessage(`${person.name} was already deleted from server`);
          setTimeout(() => setErrorMessage(null), 5000);
        });
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <AppContainer>
        <GlobalStyle />
        <Header themeSwitcher={themeSwitcher} />
        <Filter filter={filter} setFilter={setFilter} />
        <h2>Add a new contact</h2>
        <NewPersonForm
          addPerson={addPerson}
          newName={newName}
          newNumber={newNumber}
          setNewName={setNewName}
          setNewNumber={setNewNumber}
        />
        <Notification message={errorMessage} color="#E87375" />
        <Notification message={successMessage} color="#7CCCA2" />
        <Phonebook
          persons={persons}
          filter={filter}
          removePerson={removePerson}
        />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;

const AppContainer = styled.div`
  max-width: 600px;
  margin: 10px auto;
  padding: 30px;
  border-radius: 30px;
  background: ${({ theme }) => theme.primary};
`;
