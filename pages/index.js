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

  console.log(imgUrl);
  let backgroundImage = `http://www.localhost:1337${imgUrl}`;

  return (
    <>
      <div style={{ backgroundImage: backgroundImage }}>
        <h1>{data.title}</h1>
        <p>{data.text}</p>
      </div>
    </>
  );
}
