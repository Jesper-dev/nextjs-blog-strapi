import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/posts.module.scss";

export default function posts() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const result = await axios.get("http://www.localhost:1337/posts");
    setPosts(result?.data);
  }, []);
  console.log(posts);
  return (
    <div className={styles.wrapper}>
      {posts.map((item) => {
        return (
          <div key={item.id} className={styles.postContainer}>
            <h1>{item.postTitle}</h1>
            {item.postImg.length > 0 ? (
              <img src={"http://www.localhost:1337" + item.postImg[0].url} />
            ) : null}
            <p>{item.postBody}</p>
            <span>{item.postDate}</span>
          </div>
        );
      })}
    </div>
  );
}
