import Layout from "../components/Layout";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps, strapiData }) {
  console.log(strapiData);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
