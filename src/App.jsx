import React from "react";

export default function App({ name, callback }) {
  return (
    <div ref={callback}>
      <h1>{name}</h1>
    </div>
  );
}