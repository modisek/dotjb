import { useState } from "react";
import Header from "./header";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/search/${query}`);
    const data = await response.json();
    setResults(data);
  };

  return (
    <div className="container">
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          placeholder="search for an item using its name"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {results.length > 0 && (
        <div>
          {results.map((result) => (
            <li key={result.id}>
              <h3>name: {result.name}</h3>
              <p>description: {result.description}</p>
              <p>quantity: {result.quantity}</p>
              <p>result: {result.price}</p>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
