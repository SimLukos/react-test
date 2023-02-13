import styles from "./trip.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Trip({ img, destination, description, price, id }) {
  const router = useRouter();

  function handleClick() {
    router.push(`/trip/${id}`);
  }

  return (
    <div className={styles.exterior} onClick={handleClick}>
      <div className={styles.tripWrapper}>
        <div className={styles.image}>
          <img src={img} />
        </div>

        <div className={styles.info}>
          <h1>{destination}</h1>

          <p>
            {description.length >= 200
              ? description.slice(0, 199) + "... (Read more)"
              : description}
          </p>
        </div>
      </div>
      <div className={styles.priceWrapper}>
        <p className={styles.price}>{price}</p>
        <p className={styles.curency}>&euro;</p>
      </div>
    </div>
  );
}
