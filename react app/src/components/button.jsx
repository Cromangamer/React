function Button({ name, url }) {
  let style = {
    padding: "10px 20px",
    backgroundColor: "#970a26",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  let activeStyle = {
    backgroundColor: "#01c0ff",
  };

  return (
    <button style={style} onClick={() => window.open(url, "_blank")}>
      <p onMouseOver={() => {console.log("Mouse over");}}>{name}</p>
    </button>
  );
}

export default Button;
