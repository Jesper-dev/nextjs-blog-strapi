import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/posts.module.scss";
import Chat from "../components/Chat";
import Layout from "../components/Layout";

export default function posts({ posts, layoutData }) {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.postsWrapper}>
        {posts.map((item) => {
          return (
            <div key={item.id} className={styles.postContainer}>
              <h1>{item.postTitle}</h1>
              {item.postImg.length > 0 ? (
                <img
                  src={
                    "https://sleepy-river-26898.herokuapp.com" +
                    item.postImg[0].url
                  }
                />
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

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.URL}/posts`);
  const data = await res.json();
  const layoutRes = await fetch(`${process.env.URL}/home-page`);
  const layoutData = await layoutRes.json();
  // Pass data to the page via props
  return { props: { posts: data, layoutData } };
}
