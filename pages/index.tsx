import Link from 'next/link';
import { Form } from '../components/Form';
import Layout from '../components/Layout';

const HomePage = ({}) => (
  <Layout pageTitle="Home">
    <h1>HRnet</h1>
    <Link href="/employee-list">
      <a>View current employees</a>
    </Link>
    <Form />
  </Layout>
);

export default HomePage;
