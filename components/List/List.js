import styles from "./list.module.css";
import { useState } from "react";
import Trip from "../Trip/Trip";

export default function List({ results }) {
  const [trips, setTrips] = useState(results);

  return (
    <div className={styles.listWrapper}>
      {trips.map((trip) => {
        return (
          <Trip
            key={trip.id}
            img={trip.imageUrl}
            destination={trip.destination}
            description={trip.description}
            price={trip.price}
            id={trip.id}
          />
        );
      })}
    </div>
  );
}
