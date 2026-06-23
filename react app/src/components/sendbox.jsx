function Sendbox({ username, color }) {
    let style = {backgroundColor: color || 'lightblue'};

    username = username || "Anonymous";
    return (
        <div className="sendbox" style={style}>
            <p>Hello, {username}!</p>
            <button>Send</button>
        </div>
    );
}

export default Sendbox;
