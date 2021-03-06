import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

export const Shop = props => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      `https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get`
    );
    
    const items = await data.json();
    console.log("items: ", items.items);
    setItems(items.items);
  };

  return (
    <div>
      {items.map(item => (
        <h1 key={item.itemid}>
          <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
};

export default Shop;
