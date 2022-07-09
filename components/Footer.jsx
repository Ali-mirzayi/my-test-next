import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer() {
    return ( <div className={styles.container}>
        <div className={styles.cardL}></div>
        <h1 className={styles.title}>Ali Mirzaei</h1>
        <h1 className={styles.linkTitle}>
            <a href="/contact">
            <span>work with us</span>
            {/* <Image src="/img/vecteezy_coconut-fresh-nut-fruit-pieces-on-bright-background_6585459_292.jpg" alt="" height="40px" with="40px" /> */}
            </a>
        </h1>
        <div className={styles.cardS}></div>
        <div className={styles.cardS}></div>
    </div> );
}

export default Footer;