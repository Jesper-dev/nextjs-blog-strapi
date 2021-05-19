export default function posts({ strapiData }) {
  return <h1>About page here</h1>;
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.SERVER_URL}/home-page`);
  const data = await res.json();
  return { props: { strapiData: data } };
}
