import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/Layout";
// import Layout from "./components/LayoutHover";

function App(): React.JSX.Element {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
