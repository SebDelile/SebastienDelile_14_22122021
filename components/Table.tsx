import Datatable from 'react-datatable-generator';
import { dataSample } from '../data/dataSample';
import { headingsSample } from '../data/headingsSample';

export const Table = () => (
  <Datatable headings={headingsSample} data={dataSample} />
);
