import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes/AppRoutes';
import Layout from './components/Layout';

function App(): React.JSX.Element {
  return (
    <Layout>
      <AppRoutes />
      <Toaster position="top-right" reverseOrder={false} />
    </Layout>
  );
}

export default App;
