import Datatable from 'react-datatable-generator';
import { dataSample } from '../data/dataSample';
import { headingsSample } from '../data/headingsSample';
import { useGlobalContext } from '../utils/globalContext';

export const Table = () => {
  const { employeeList } = useGlobalContext();
  return employeeList.length ? (
    <Datatable headings={headingsSample} data={employeeList} />
  ) : null;
};
