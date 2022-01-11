import Link from 'next/link';
import { Form } from '../components/Form';
import Layout from '../components/Layout';
import { Table } from '../components/Table';

const EmployeeListPage = ({}) => (
  <Layout pageTitle="Current Employees">
    <h1 className="text-5xl font-bold text-center my-4">Current Employees</h1>
    <Table />
    <Link href="/">
      <a className="link text-2xl text-center my-2">Home</a>
    </Link>
  </Layout>
);

export default EmployeeListPage;
