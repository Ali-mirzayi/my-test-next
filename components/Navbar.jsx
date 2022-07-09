import styles from "../styles/Contact.module.css";
import Link from "next/link"
function Navbar() {
  return (
  <div className={styles.container}>
    <Link href="/">Home</Link>
    <ul className={styles.list}>
        <li className={styles.listItem}><Link href="/products/Bret">Design</Link></li>
        <li className={styles.listItem}><Link href="/products/Antonette">Development</Link></li>
        <li className={styles.listItem}><Link href="/products/Samantha">Productction</Link></li>
        <li className={styles.listItem}><Link href="/products/Karianne">Photography</Link></li>
        <li className={styles.listItem}><Link href="/Contact">Contact</Link></li>
    </ul>
    </div>
    );
}

export default Navbar;
