import styles from "../styles/Services.module.css";
import Link from "next/link";
import Image from 'next/image';
function Serivces({ coWorkers }) {
    // console.log(coWorkers);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What we can do?</h1>
      <h1 className={styles.subtitle}>Services we can help you with</h1>
      <div className={styles.services}>
        {coWorkers.map((service) => (
          <Link passHref key={service.id} href={`/products/${service.last_name}`}>
            <div className={styles.service}>
                <span className={styles.cat}>{service.first_name}</span>
                <div className={styles.cocat}>{service.last_name}</div>
                <div className={styles.media}>
                    {service.video ? (
                        <video src={service.video} autoPlay loop muted className={styles.video} />
                    ) : (
                        <Image loader={()=>service.avatar} src={service.avatar} alt="dfa" width="100%" height="100%" layout="responsive" objectFit="cover" />
                    )}
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Serivces;
