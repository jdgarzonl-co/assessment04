import Image from "next/image";
import styles from "./page.module.css";
import { AddContact } from "./contact-form";
import GetContacts from "./get-contacts";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <h1>Assessment 04</h1> */}
      <AddContact />
      <GetContacts />
    </div>
  );
}
