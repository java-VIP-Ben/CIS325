import React, { useState } from "react";
import Child from "./Child";
import "./Styles.css"

function Parent() {
  const [data, setData] = useState("Click the button to use the API");

  return (
    <div className="container">
      <header className="header">
        <h1>Cat Fact Generator!</h1>
      </header>
      <p>{data}</p>
      <br></br>
      <br></br>
      <Child name="Click this button to generate a new cat fact!" setData={setData}></Child>
    </div>
  )
}

export default Parent;
