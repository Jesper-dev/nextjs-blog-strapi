import "../styles/globals.scss";

export default function MyApp({ Component, pageProps, strapiData }) {
  console.log(strapiData);
  return <Component {...pageProps} />;
}
