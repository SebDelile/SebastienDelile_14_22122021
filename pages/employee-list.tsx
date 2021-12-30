import Link from 'next/link';
import { Form } from '../components/Form';
import Layout from '../components/Layout';
import { Table } from '../components/Table';

const EmployeeListPage = ({}) => (
  <Layout pageTitle="Current Employees">
    <h1>Current Employees</h1>
    <Table />
    <Link href="/">
      <a>Home</a>
    </Link>
  </Layout>
);

export default EmployeeListPage;
