import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Navbar from "./Navbar";
import styles from "../styles/layout.module.scss";

export default function Layout({ children }) {
  const [data, setData] = useState({});
  useEffect(async () => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_STRAPI_API_URL + "/home-page"
    );
    setData(res.data);
  }, []);
  const img = process.env.NEXT_PUBLIC_LINK_IMG_URL;

  return (
    <>
      <Head>
        <title>Next Js Blog</title>
        <meta property="og:title" content="Next JS Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content={img}></meta>
        <meta property="og:image:url" content={img}></meta>
        <meta
          property="og:url"
          content="https://nextjs-blog-strapi.vercel.app/"
        ></meta>
      </Head>
      <Navbar data={data} />
      <main className={styles.main}>{children}</main>
    </>
  );
}
