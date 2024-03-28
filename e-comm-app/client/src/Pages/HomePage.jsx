import React from "react";
import Layout from "../Components/Layout/Layout";
import { useAuth } from "../Context/AuthContext";

const HomePage = () => {
  //eslint-disable-next-line
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Layout>
        <h1>Home Page</h1>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </Layout>
    </>
  );
};

export default HomePage;
