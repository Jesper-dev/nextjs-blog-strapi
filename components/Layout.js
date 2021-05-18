import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Navbar from "./Navbar";
import styles from "../styles/layout.module.scss";

export default function Layout({ children }) {
  const [data, setData] = useState({});
  useEffect(async () => {
    const result = await axios.get(`${process.env.URL}/home-page`);
    setData(result?.data);
  }, []);
  console.log(data);
  return (
    <>
      <Head>
        <title>Next Js Blog</title>
        <meta property="og:title" content="Next JS Blog" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          property="og:image"
          content={process.env.URL + data.homePageImg[0].url}
        ></meta>
      </Head>
      <Navbar data={data} />
      <main className={styles.main}>{children}</main>
    </>
  );
}
