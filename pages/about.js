import { fetchAPI } from "../lib/api";
import styles from "../styles/about.module.scss";

export default function posts({ strapiData }) {
  return <p className={styles.text}>{strapiData.aboutMe}</p>;
}

export async function getStaticProps() {
  const [strapiData] = await Promise.all([fetchAPI("/about")]);
  return {
    props: {
      strapiData,
    },
  };
}
