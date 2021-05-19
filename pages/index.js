import { useEffect, useState } from "react";
import styles from "../styles/home.module.scss";

export default function Home({ strapiData }) {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    setImgUrl(strapiData.homePageImg[0].url);
  }, []);
  let backgroundImageUrl = `url(${process.env.URL}${imgUrl})`;
  return (
    <>
      <div
        style={{ backgroundImage: backgroundImageUrl }}
        className={styles.homeContainer}
      >
        <h1 className={styles.animTypewriter}>{strapiData.title}</h1>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.URL}/home-page`);
  const data = await res.json();
  return { props: { strapiData: data } };
}
