import styles from "./tripOnly.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import myGif from "../../public/giphy.gif";
import { useState } from "react";

export default function TripOnly({
  url,
  destination,
  description,
  date,
  duration,
  price,
}) {
  const [display, setDisplay] = useState("none");

  function handleClick() {
    setDisplay("block");
  }

  return (
    <div className={styles.tripWrapper}>
      <div className={styles.infoWrapper}>
        <h1>{destination}</h1>
        <p className={styles.description}>{description}</p>
        <p className={styles.bolder}>{date}</p>
        <p className={styles.bolder}>Duration: {duration}</p>
        <div className={styles.priceWrapper}>
          <p className={styles.price}>{price}</p>
          <p className={styles.curency}>&euro;</p>
        </div>
        <Button title={"Book!"} onClick={handleClick} />
      </div>
      <div className={styles.photoWrapper}>
        <img className={styles.image} src={url} />
      </div>
      <div
        style={{
          display: `${display}`,
        }}
      >
        <Image src={myGif} width="480" height="270" />
      </div>
    </div>
  );
}
