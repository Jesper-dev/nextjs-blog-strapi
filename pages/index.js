import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";

const Home = ({ strapiData, url }) => {
  const imgUrl = `url(${process.env.NEXT_PUBLIC_HOME_PAGE_IMG_URL})`;
  console.log(imgUrl);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_HOME_PAGE_IMG_URL})`,
        }}
        className={styles.homeContainer}
      >
        <h1 className={styles.animTypewriter}>{strapiData.title}</h1>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const [strapiData] = await Promise.all([fetchAPI("/home-page")]);
  return {
    props: {
      strapiData,
    },
  };
}

export default Home;
