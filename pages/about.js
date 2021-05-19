import Layout from "../components/Layout";

export default function posts({ strapiData }) {
  return <h1>About page here</h1>;
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.URL}/home-page`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { strapiData: data } };
}
