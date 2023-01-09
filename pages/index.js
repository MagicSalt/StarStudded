import styles from "../styles/Home.module.css";

export default function Home({ results }) {
  console.log(results);
  return (
    <div>
      <h1> Render my page pls</h1>
    </div>
  );
}

export async function getServerSideProps() {
  console.log("hello from server");

  const res = await fetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=" + process.env.REACT_APP_APIKEY
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      results: data,
    },
  };
}
