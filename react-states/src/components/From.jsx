import { useState } from "react";



export default function From() {
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        setName(form.name.value); // this line is rerendering the component and resetting the form, so we need to set the name state before resetting the form
        console.log(name);
        form.reset();
    }
  return (
    <>
      <h1>States Example</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        <button id="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
