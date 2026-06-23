import { useState } from 'react';
import './App.css'
import Card from './components/Card';
import Sendbox from './components/sendbox';
import ItemList from './components/item';
import UserFrom from './components/Form';

function Title({ title }) {
  return <h1>{title}</h1>;
}

function App() {
  const products = [
    {
      title: "Wireless Headphones",
      description: "Comfortable Bluetooth headphones with clear sound and long battery life.",
      price: 1499,
    },
    {
      title: "Smart Watch",
      description: "Tracks daily steps, heart rate, notifications, and workout activity.",
      price: 2499,
    },
    {
      title: "Laptop Backpack",
      description: "Water-resistant backpack with padded laptop storage and extra compartments.",
      price: 899,
    },
    {
      title: "Gaming Mouse",
      description: "Fast response mouse with adjustable DPI and smooth grip for gaming.",
      price: 699,
    },
    {
      title: "Portable Speaker",
      description: "Compact speaker with rich bass, Bluetooth support, and travel-friendly design.",
      price: 1299,
    },
  ];

  return (
    <>
    <UserFrom />
    <br />
    <ItemList />
      {/* <Title title="Product Store" />  */}
      {/* {products.map((product, index) => (
        <Card
        key={index}
        title={product.title}
        description={product.description}
        price={product.price}
        />
      ))}
      <br /> */}
      {/* <Title title="Sendbox Component" /> */}
      {/* <Sendbox username="Alice" color="lightyellow" /> */}
      {/* <Sendbox username="John Doe" color="lightgray" /> */}
    </>
  )
}

export default App
