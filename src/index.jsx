import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<App name="ian.tech" callback={() => console.log('app rendered')} />);
  // document.root = root;
  // ReactDOM.render(<div>WORKING</div>, root);
});