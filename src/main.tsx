import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Temporarily removed React.StrictMode becasue of re-rendering issues
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
);
