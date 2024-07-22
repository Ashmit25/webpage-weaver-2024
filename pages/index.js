import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Treeminder | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/treeminder.webp" />
      </Head>
      <main>
        <h1>Innovate, Integrate, Impact</h1>
        <h1 className={styles.second}>With Treeminder</h1>
        <div className={styles.heading3}>
          <h3>Mind The Trees With AI</h3>
          <h3>Using our range of Services and Products</h3>
        </div>
        <div className={styles.buttoncont}>
          <button>
            <a className={styles.aboutlink} id="link" href="#about_us">
              About Us
            </a>
          </button>
          <button>
            <Link className={styles.aboutlink} href="/products">
              Our Services
            </Link>
          </button>
        </div>
        <div id="about_us">
          <h2 className={styles.heading2}>ABOUT US</h2>
          <div className={styles.aboutcont}>
            <p>
              Treeminder AI is a software that can be integrated into existing
              CCTV cameras. The software is trained to detect patterns of
              falling trees. Once Treeminder has detected a tree fall, it alerts
              the system connected to the CCTV. Along with that it can also use Advanced Computer Vision to be an early warning system for trees that may have a risk of
              falling in the near future.{" "}
            </p>
            <Image
              src="/robot2.svg"
              alt="blue cctv"
              width={300}
              height={400}
            /> 
          </div>
        </div>
      </main>
    </>
  );
}
