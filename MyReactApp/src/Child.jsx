// Child.jsx file Assignment 7
import React from "react";

function Child({ name, setData }) {

  const getFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const json = await response.json();

      setData(json.fact); // send data back to Parent
    } catch (error) {
      setData("Error fetching data.");
    }
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={getFact}>Generate Cat Fact</button>
    </div>
  );
}

export default Child;
