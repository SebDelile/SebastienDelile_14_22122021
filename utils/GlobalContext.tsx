import { createContext, useContext, useEffect, useState } from 'react';
import { dataSample } from '../data/dataSample';

type Employee = { [Key: string]: any };

type ContextType = {
  employeeList: Employee[];
  addEmployee: (newEmployee: Employee) => void;
};

const appContext = createContext({} as ContextType);

const LOCAL_STORAGE_KEY = 'employeeList';

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

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

  const addEmployee = (newEmployee: Employee): void => {
    setEmployeeList(employeeList.concat(newEmployee));
  };

  return (
    <appContext.Provider value={{ employeeList, addEmployee }}>
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => {
  const globalContext = useContext(appContext);
  if (!globalContext) {
    throw new Error(
      'useGlobalContext hookcan only be called within a GlobalContext'
    );
  }
  return globalContext;
};
