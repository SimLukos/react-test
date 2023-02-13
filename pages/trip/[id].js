import { Header, TripOnly } from "@/components/imports";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Trip() {
  const router = useRouter();
  const { id } = router.query;

  const [trip, setTrip] = useState([]);

  const renderedTrip = async () => {
    const result = await axios.get(
      `https://63e3cab1c919fe386c0f05da.mockapi.io/trips/${id}`
    );

    console.log(result.data);
    setTrip(result.data);
  };

  useEffect(() => {
    renderedTrip();
  }, []);

  return (
    <div>
      <Header />
      <TripOnly
        url={trip.imageUrl}
        destination={trip.destination}
        description={trip.description}
        date={trip.date}
        price={trip.price}
        duration={trip.duration}
      />
    </div>
  );
}
