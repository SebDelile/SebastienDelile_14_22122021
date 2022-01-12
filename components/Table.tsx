import dynamic from 'next/dynamic';
import { headingsSample } from '../data/headingsSample';
import { useGlobalContext } from '../utils/GlobalContext';

const Datatable = dynamic(() => import('react-datatable-generator'));

/**
 * The table component to display the mployee list. Contain the table from react-datatable-generator.
 * uses the context as data to fill the table
 */
export const Table = () => {
  const { employeeList } = useGlobalContext();
  return employeeList.length ? (
    <div className="w-4/5 sm:w-11/12 mx-0 max-w-7xl my-4">
      <Datatable
        headings={headingsSample}
        data={employeeList}
        customStyle={customStyle}
      />
    </div>
  ) : null;
};

/**
 * some style rules to customise the style of the table
 */
const customStyle = {
  tableHeadBackground: '#F3F4F6',
  tableBodyBackground: '#FFF',
  tableOddRowBackground: '#E0F2FE',
  tableSortedColumnBackground: '#FFF',
  tableSortedColumnOddRowBackground: '#E0F2FE',
  tableHoveredRowBackground: '#7DD3FC',
  tableSortedColumnHoveredRowBackground: '#7DD3FC',
  moreInfoTableBackground: '#F0F9FF',
  tableCellHorizontalBorder: 'none',
  selectPageButtonDisabledColor: '#999',
  selectPageButtonActiveBorder: '1px solid transparent',
  selectPageButtonActiveBackground: '#596E07',
  selectPageButtonActiveColor: '#FFF',
  selectPageButtonHoveredBorder: '1px solid transparent',
  selectPageButtonHoveredBackground: '#7DD3FC',
  selectPageButtonHoveredColor: '#000',
};
