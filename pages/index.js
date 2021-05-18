import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import Layout from "../components/Layout";

export default function Home({ strapiData }) {
  const [imgUrl, setImgUrl] = useState("");

  setImgUrl(strapiData.homePageImg[0].url);

  let backgroundImageUrl = `url(https://sleepy-river-26898.herokuapp.com/${imgUrl})`;

  return (
    <>
      <Layout data={strapiData}>
        <div
          style={{ backgroundImage: backgroundImageUrl }}
          className={styles.homeContainer}
        >
          <h1 className={styles.animTypewriter}>{strapiData.title}</h1>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.URL}/home-page`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { strapiData: data } };
}
