import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true",
      {
        method: "GET",
      }
    ).then(async (resp) => {
      const dts = await resp.json();
      console.log("Data:", dts);
      setData(dts);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Estadisticas <a>COVID-19</a>
        </h1>

        <p className={styles.description}>
          Trabajo de clases, obtener datos de un API y presentarlos.
        </p>

        <p>
          https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true
        </p>
        <div className={styles.grid}>
          {/* country: "Algeria"
              deceased: 2891
              historyData: "https://api.apify.com/v2/datasets/hi0DJXpcyzDwtg2Fm/items?format=json&clean=1"
              infected: 107339
              lastUpdatedApify: "2021-02-01T16:55:00.000Z"
              moreData: "https://api.apify.com/v2/key-value-stores/pp4Wo2slUJ78ZnaAi/records/LATEST?disableRedirect=true"
              recovered: 73344
              sourceUrl: "https://www.worldometers.info/coronavirus/"
              tested: "NA" */}
          {data &&
            data.map((r, i) => {
              return (
                <a
                  key={i}
                  href="https://nextjs.org/docs"
                  className={styles.card}
                >
                  <h3>{r.country}</h3>
                  <p>Infectados: {r.infected}</p>
                  <p>Recuperados: {r.recovered}</p>
                  <p>Fallecidos: {r.deceased}</p>
                </a>
              );
            })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Construcción de SOFTWARE APIs | Powered by Richard Vinueza (6745)
        </a>
      </footer>
    </div>
  );
}
