import styles from "../styles/Testimonials.module.css";
import Circle from "./Circle";
import Image from 'next/image';

function Testimonials(users) {
    return ( 
    <div className={styles.container}>
        <Circle backgroundColor="darkblue" top="-70vh" right="0" left="0" />
        <h1 className={styles.title}>Testimonials</h1>
        <div className={styles.wrapper}>
            {users.users.map((user) => (
               <div key={user.id} className={styles.card} >
                 <Image loader={()=>user.avatar} src={user.avatar} width="30" height="30" alt="" />
                 <p className={styles.comment}>
                    {user.first_name}
                 </p>
                 {/* <div className={styles.person}/> */}
               </div>
            ))}
        </div>
    </div>
    );
}

export default Testimonials; 