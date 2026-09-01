import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./app.jsx";
createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);