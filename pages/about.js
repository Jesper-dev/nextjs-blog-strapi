import { fetchAPI } from "../lib/api";

export default function posts({ strapiData }) {
  return <h1>About page here</h1>;
}

export async function getStaticProps() {
  const [strapiData] = await Promise.all([fetchAPI("/home-page")]);
  return {
    props: {
      strapiData,
    },
  };
}
