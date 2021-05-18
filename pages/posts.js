import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/posts.module.scss";
import Chat from "../components/Chat";

export default function posts() {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const result = await axios.get(`${process.env.URL}/posts`);
    setPosts(result?.data);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.postsWrapper}>
        {posts.map((item) => {
          return (
            <div key={item.id} className={styles.postContainer}>
              <h1>{item.postTitle}</h1>
              {item.postImg.length > 0 ? (
                <img src={process.env.URL + item.postImg[0].url} />
              ) : null}
              <p>{item.postBody}</p>
              <span>{item.postDate}</span>
            </div>
          );
        })}
      </div>
      <Chat />
    </div>
  );
}
