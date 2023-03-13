import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import Header from "./components/header";

export default function Home({ result }) {
    return (
        <div className="container">
            <Header />
            <div>
                <h1>Inventory management system</h1>
            </div>
            <div>
                <Link href="/components/addForm">
                    {" "}
                    <button>Add Items</button>
                </Link>
            </div>
            <div>
                {result.map((item) => (
                    <div key={item.id}>
                        <p key={item.id}>Name: {item.name}</p>
                        <p>Description: {item.description}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: {item.price}</p>
                        <form
                            onSubmit={async (event) => {
                                event.preventDefault();
                                const data = {
                                    name: event.target.name.value,
                                    description: event.target.description.value,
                                    quantity: event.target.quantity.value,
                                    price: event.target.price.value,
                                };
                                const jsonData = JSON.stringify(data);

                                const opts = {
                                    method: "PUT",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: jsonData,
                                };
                                const resp = await fetch(`api/products/${item.id}`, opts);
                                const result = await resp.json();
                            }}
                            style={{ display: "" }}
                        >
                            <div className="grid">
                                <label htmlFor="name">
                                    name
                                    <input type="text" name="name" placeholder={item.name} />
                                </label>
                                <label htmlFor="description">
                                    description
                                    <input
                                        type="text"
                                        name="description"
                                        placeholder={item.description}
                                    />
                                </label>
                                <label htmlFor="quantity">
                                    quantity
                                    <input
                                        type="number"
                                        name="quantity"
                                        placeholder={item.quantity}
                                    />
                                </label>
                                <label htmlFor="price">
                                    price
                                    <input type="number" name="price" placeholder={item.price} />
                                </label>
                            </div>
                            <button type="submit">Update</button>
                        </form>
                        <button>edit</button>
                        <button
                            onClick={async () => {
                                const opts = {
                                    method: "DELETE",
                                };
                                const _ = await fetch(`/api/products/${item.id}`, opts);
                            }}
                        >
                            delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export async function getServerSideProps() {
    const data = await fetch("http://localhost:3000/api/products");
    const result = await data.json();

    return { props: { result } };
}
