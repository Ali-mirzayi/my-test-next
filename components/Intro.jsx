import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

function Intro() {
  return (
    <div className={styles.container}>
      <Circle background="yellow" left="-50vh" top="-50vh" />
      <Circle background="blue" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.summer}>Summer</span> BE COOOOOOL
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/Vecteezy_Sloth2.jpg "
          width="100%"
          height="100%"
          layout="fill"
          alt="you loosed"
        />
      </div>
    </div>
  );
}

export default Intro;
