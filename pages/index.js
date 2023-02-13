import { Header, Button, List } from "@/components/imports";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();

  function handleClick() {
    router.push(`insertTrip`);
  }

  return (
    <>
      <div>
        <Header />
        <Button
          title={"Create Holiday"}
          align={"center"}
          onClick={handleClick}
        />
        <List results={results} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(
    "https://63e3cab1c919fe386c0f05da.mockapi.io/trips"
  );

  return {
    props: {
      results: data,
    },
  };
}
