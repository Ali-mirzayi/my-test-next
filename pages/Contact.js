import styles from "../styles/Contact.module.css";
import Circle from "../components/Circle";
function Contact() {
  return (
    <div style={styles.container}>
      {/* <Circle backgroundColor="darkblue" top="70vh" right="0" left="0" /> */}
      {/* <Circle background="green" left="-50vh" /> */}
    </div>
  );
}

export default Contact;
    "serve-json":"json-server --watch db.json --port 8000"