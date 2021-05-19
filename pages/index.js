import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

export default function Home({ strapiData }) {
  const [imgUrl, setImgUrl] = useState("");
  console.log(process.env.SERVER_URL);
  useEffect(() => {
    setImgUrl(strapiData.homePageImg[0].url);
  }, []);
  let backgroundImageUrl = `url(${process.env.SERVER_URL}${imgUrl})`;
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
  const res = await fetch(`${process.env.SERVER_URL}/home-page`);
  const data = await res.json();
  return { props: { strapiData: data } };
}
