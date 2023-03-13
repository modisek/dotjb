import { useState } from "react";
import Header from "./header";

export default function Search() {
  const [res, setRes] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const term = event.target.search.value;

    const endpoint = `/api/search/${term}`;

    const resp = await fetch(endpoint);
    const result = await resp.json();
    setRes(result);
  };
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="search" />
        <button type="submit">search</button>
      </form>
      {res}
    </>
  );
}
