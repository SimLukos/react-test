import styles from "./insertTrip.module.css";
import { Header, Button, Input, TextArea } from "@/components/imports";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function InsertTrip() {
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  function handleDestination(event) {
    setDestination(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  function handleDuration(event) {
    setDuration(event.target.value);
  }

  function handlePrice(event) {
    setPrice(event.target.value);
  }

  function handleUrl(event) {
    setUrl(event.target.value);
  }

  function handleDescription(event) {
    setDescription(event.target.value);
  }

  console.log(!!destination, !!price);

  async function handleClick() {
    try {
      if (destination && date && duration && url && price && description) {
        await axios
          .post("https://63e3cab1c919fe386c0f05da.mockapi.io/trips", {
            destination: destination,
            date: date,
            duration: duration,
            imageUrl: url,
            price: price,
            description: description,
          })
          .then((response) => {
            if (response.status === 201) {
              router.push(`/`);
            } else {
              alert("Nekazka ivyko :(");
            }
          });
      } else {
        alert("Fill all the fields");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <Header />
        <div className={styles.inputsWrapper}>
          <Input
            placeHolder={"Destination..."}
            type={"text"}
            value={destination}
            onChange={handleDestination}
          />
          <Input
            placeHolder={"Date..."}
            type={"text"}
            value={date}
            onChange={handleDate}
          />
          <Input
            placeHolder={"Duration (Days)..."}
            type={"text"}
            value={duration}
            onChange={handleDuration}
          />
          <Input
            placeHolder={"Price..."}
            type={"text"}
            value={price}
            onChange={handlePrice}
          />
          <Input
            placeHolder={"Image Url Adress..."}
            type={"text"}
            value={url}
            onChange={handleUrl}
          />
          <TextArea
            placeHolder={"Description..."}
            value={description}
            onChange={handleDescription}
          />
          <Button title={"Publish"} align={"end"} onClick={handleClick} />
        </div>
      </div>
    </>
  );
}
