import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppRoutes from '../routes/AppRoutes';
import Loader from './Loader/Loader';
import Layout from './Layout';

function App(): React.JSX.Element {
  return (
    <Layout>
      <Loader />
      <AppRoutes />
      <Toaster position="top-right" reverseOrder={false} />
    </Layout>
  );
}

export default App;
