import * as React from "react";
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" >
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="An orange mountain on a dawn" src="https://images.unsplash.com/photo-1551457231-f3bb7403fcbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" />
    </Layout>
  );
};

export default IndexPage;
