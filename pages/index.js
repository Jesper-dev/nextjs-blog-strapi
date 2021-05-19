import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";

const Home = ({ strapiData, url }) => {
  console.log(url);
  console.log(process.env.NODE_ENV);

  const imgUrl = `url(${url})`;
  console.log(imgUrl);
  return (
    <>
      <div style={{ backgroundImage: imgUrl }} className={styles.homeContainer}>
        <h1 className={styles.animTypewriter}>{strapiData.title}</h1>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const [strapiData] = await Promise.all([fetchAPI("/home-page")]);
  const url = getStrapiMedia("/uploads/code_Background_e6e589cc51.jpg");
  return {
    props: {
      strapiData,
      url,
    },
  };
}

export default Home;
