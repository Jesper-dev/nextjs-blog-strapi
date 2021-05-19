import App from "next/app";
import Head from "next/head";
import styles from "../styles/globals.scss";
import { fetchAPI } from "../lib/api";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
