import { useState, useEffect } from "react";
import "./second.css";

export default function Second() {
  let [count, setCount] = useState(1);
  let [jokes, setJokes] = useState("");
  let [lodding, setLodding] = useState(false);

  useEffect(() => {
    async function getfirstjokes() {
      setLodding(true);
      const DATA = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );
      let jsonResponse = await DATA.json();
      setJokes(jsonResponse);
      setLodding(false);
    }
    getfirstjokes();
  }, [count]);
  return (
    <main id="jokes">
      {lodding ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h3>
            {count}. {jokes.setup}
          </h3>
          <p>Answer : {jokes.punchline}</p>
        </div>
      )}

      <button
        onClick={() => {
          setCount((number) => (number += 1));
        }}
      >
        Next Joke!
      </button>
    </main>
  );
}
