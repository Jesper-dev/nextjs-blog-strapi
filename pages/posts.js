import styles from "../styles/posts.module.scss";
import Chat from "../components/Chat";

export default function posts({ posts }) {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.postsWrapper}>
        {posts.map((item) => {
          return (
            <div key={item.id} className={styles.postContainer}>
              <h1>{item.postTitle}</h1>
              {item.postImg.length > 0 ? (
                <img src={process.env.STRAPI + item.postImg[0].url} />
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
  const res = await fetch(`${process.env.STRAPI}/posts`);
  const data = await res.json();
  return { props: { posts: data } };
}
