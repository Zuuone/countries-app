import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const country = {
  name: "Peru",
  capital: "Lima",
  population: "34,217,848",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App country={country} />
  </StrictMode>
);
