function Card({ title, description, price }) {
    let style = {backgroundColor: price > 2000 ? 'lightcoral' : 'lightgreen'};

    title = title || "Default Title";
    description = description || "Default Description";
    price = price || 100;
    return (
        <div className="card" style={style}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Price: {price}</p>
            {price > 2000 && <p>Discount: 50%</p>}
        </div>
    );
}

export default Card;
