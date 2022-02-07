import { NewPersonProps, PersonProps } from './../types/Person';
import axios from 'axios';

const baseUrl = '/persons';

const getAll = async (): Promise<PersonProps[]> => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newObject: NewPersonProps): Promise<PersonProps> => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const update = async (
  id: number,
  newObject: PersonProps,
): Promise<PersonProps> => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

const remove = async (id: number): Promise<number> => {
  await axios.delete(`${baseUrl}/${id}`);
  return id;
};

export default { getAll, create, remove, update };
