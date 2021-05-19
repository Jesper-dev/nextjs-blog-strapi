import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

export default function Home({ strapiData }) {
  const [imgUrl, setImgUrl] = useState("");
  console.log(process.env.SERVER_URL);
  useEffect(() => {
    setImgUrl(strapiData.homePageImg[0].url);
  }, []);
  // let backgroundImageUrl = `url(${process.env.SERVER_URL}${imgUrl})`;
  let backgroundImageUrl =
    "https://sleepy-river-26898.herokuapp.com/uploads/code_Background_757fa3dc6e.jpg";
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
  const res = await fetch("https://sleepy-river-26898.herokuapp.com/home-page");
  const data = await res.json();
  return { props: { strapiData: data } };
}
