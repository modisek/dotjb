import Header from "./header";
import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      price: event.target.price.value,
    };
    const jsonData = JSON.stringify(data);

    const endpoint = "/api/products";

    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    };
    const resp = await fetch(endpoint, opts);
    const result = await resp.json();
    router.push("/");
  };
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="description" placeholder="description" />
        <input type="text" name="quantity" placeholder="quantity" />
        <input type="text" name="price" placeholder="price" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
