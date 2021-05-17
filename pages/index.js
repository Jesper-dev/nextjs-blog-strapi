import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState({});
  const [imgUrl, setImgUrl] = useState("");

  useEffect(async () => {
    const result = await axios.get("http://www.localhost:1337/home-page");
    setData(result?.data);
    setImgUrl(result?.data.homePageImg[0].url);
  }, []);

  let backgroundImageUrl = `url(http://www.localhost:1337${imgUrl})`;

  return (
    <>
      <div
        style={{ backgroundImage: backgroundImageUrl }}
        className={styles.homeContainer}
      >
        <h1 className={styles.animTypewriter}>{data.title}</h1>
      </div>
    </>
  );
}
