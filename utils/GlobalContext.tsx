import { createContext, useContext, useEffect, useState } from 'react';
import { dataSample } from '../data/dataSample';

type Employee = { [Key: string]: any };

type ContextType = {
  employeeList: Employee[];
  addEmployee: (newEmployee: Employee) => void;
};

/**
 * the context initialisation
 */
const appContext = createContext({} as ContextType);

/**
 * the key to save/load data in localstorage
 */
const LOCAL_STORAGE_KEY = 'employeeList';

/**
 * the props to be passed to the context provider
 */
type Props = {
  children: React.ReactElement | React.ReactElement[];
};

/**
 * the context provider. provide the employee list and the method to add a new employee
 * sets a employee list in a state.
 * On first mounting, loads the localstorage if it exists. If not it loads the data sample
 * then it saves the employee list in localstorage on every change on the employee list
 */
export const GlobalContext = ({ children }: Props): React.ReactElement => {
  const [employeeList, setEmployeeList] = useState([] as Employee[]);

  useEffect(() => {
    const storedData = localStorage && localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) setEmployeeList(JSON.parse(storedData));
    else setEmployeeList(dataSample);
  }, []);

  useEffect(() => {
    if (employeeList.length) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employeeList));
    }
  }, [employeeList]);

  /**
   * method to add an employee to the list
   */
  const addEmployee = (newEmployee: Employee): void => {
    setEmployeeList(employeeList.concat(newEmployee));
  };

  return (
    <appContext.Provider value={{ employeeList, addEmployee }}>
      {children}
    </appContext.Provider>
  );
};

/**
 * custom hook to call the context data. throw an error if there is no provider in the tree.
 */
export const useGlobalContext = () => {
  const globalContext = useContext(appContext);
  if (!globalContext) {
    throw new Error(
      'useGlobalContext hookcan only be called within a GlobalContext'
    );
  }
  return globalContext;
};
