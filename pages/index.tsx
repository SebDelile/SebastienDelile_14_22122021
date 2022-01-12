import Link from 'next/link';
import { Form } from '../components/Form';
import Layout from '../components/Layout';

/**
 * the homepage of the app. Contains a form to add new employee and a link to employee list page
 */
const HomePage = ({}) => (
  <Layout pageTitle="Home">
    <h1 className="text-5xl font-bold text-center my-4">HRnet</h1>
    <Link href="/employee-list">
      <a className="link text-2xl text-center my-2">View current employees</a>
    </Link>
    <Form />
  </Layout>
);

export default HomePage;
