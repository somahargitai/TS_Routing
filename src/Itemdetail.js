import React, { useState, useEffect } from 'react';
import './App.css';

const ItemDetail = ({ match }) => {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);
 
  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      // id example: b0967d8-a59cd27-01472ce-2e4f0ec`
      `https://fortnite-public-api.theapinetwork.com/item/get?ids=${ match.params.id }`
    );

    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1> Item </h1>
      <img src={item.images.transparent} alt="" />
    </div>
  );
}

export default ItemDetail;