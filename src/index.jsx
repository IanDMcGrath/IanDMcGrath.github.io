import React from "react";
import ReactDOM from "react-dom";
import ReactDOMClient from "react-dom/client";
import App from './App';
// import "./../css/stylesheets.css";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('root');
  const root = ReactDOMClient.createRoot(container);
  root.render(<App name="ian.tech" callback={() => console.log('app rendered')} />);
  // document.root = root;
  // ReactDOM.render(<div>WORKING</div>, root);
});