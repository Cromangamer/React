import Button from "./button";

// Item Structure
function Item(props) {
  const price = props.oldPrice;
  let newPrice;
  if (price > 5000) {
    newPrice = price * 0.5;
  } else if (price > 2000) {
    newPrice = price * 0.7;
  } else if (price > 1000) {
    newPrice = price * 0.8;
  } else if (price > 500) {
    newPrice = price * 0.9;
  } else {
    newPrice = price;
  }

  return (
    <div
      className="item"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "300px",
      }}
    >
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>
        <span style={{ textDecoration: "line-through", color: "red" }}>
          Price: ${props.oldPrice}
        </span>
        <span
          style={{ color: "green", fontWeight: "bold", paddingLeft: "10px" }}
        >
          Discounted Price: ${newPrice}
        </span>
      </p>
      <Button name="YouTube" url={"https://www.youtube.com"} />
    </div>
  );
}

// Item List Component
function ItemList() {
  const items = [
    { name: "Laptop", description: "High performance laptop", oldPrice: 1500 },
    {
      name: "Smartphone",
      description: "Latest model smartphone",
      oldPrice: 800,
    },
    {
      name: "Headphones",
      description: "Noise-cancelling headphones",
      oldPrice: 300,
    },
    {
      name: "Smartwatch",
      description: "Feature-rich smartwatch",
      oldPrice: 200,
    },
    {
      name: "Gaming Console",
      description: "Next-gen gaming console",
      oldPrice: 500,
    },
  ];
  return items.map((item, index) => (
    <Item
      key={index}
      name={item.name}
      description={item.description}
      oldPrice={item.oldPrice}
    />
  ));
}

export default ItemList;
